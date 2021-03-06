/* globals angular */

'use strict';

angular
  .module('climatic')
  .controller('FeedController', function($scope, PostsFactory, CameraFactory, $ionicLoading, $ionicModal, $ionicPopup) {

    /** Feed */
    function showLoadingSpinner() {
      $ionicLoading.show({
        template: '<ion-spinner icon="lines"></ion-spinner>'
      });
    }

    function handleResponse(resp) {
      $scope.posts = resp.posts;
      $scope.hasMorePosts = resp.hasMore;
    }

    $scope.refreshFeed = function() {
      PostsFactory.getPosts().then(function(resp) {
        handleResponse(resp);
        $ionicLoading.hide();
        $scope.$broadcast('scroll.refreshComplete');
      });
    };

    $scope.loadMorePosts = function() {
      PostsFactory.getNextPosts().then(function(resp) {
        handleResponse(resp);
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    showLoadingSpinner();
    $scope.refreshFeed();


    /** Add Post Modal */
    $ionicModal.fromTemplateUrl('html/add-post.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.addPostModal = modal;
    });

    $scope.addPostData = {
      title: '',
      description: '',
      picture: ''
    };

    $scope.openAddPostModal = function() {
      $scope.addPostModal.show();
    };

    $scope.takePicture = function() {
      CameraFactory
        .takePicture()
        .then(function(picture) {
          $scope.addPostData.picture = picture;
        })
        .catch(function() {
          $ionicPopup.alert({
            title: 'Oops',
            template: 'Sorry, a picture could not be taken.'
          });
        });
    };

    $scope.removePicture = function() {
      $scope.addPostData.picture = '';
    };

    $scope.isAddPostDataValid = function() {
      return $scope.addPostData.title &&
             $scope.addPostData.description &&
             $scope.addPostData.picture;
    };

    $scope.savePost = function() {
      showLoadingSpinner();
      PostsFactory
        .savePost($scope.addPostData)
        .then(function() {
          $scope.addPostModal.hide();
          $scope.refreshFeed();
        });
    };

    $scope.cancelPost = function() {
      $scope.addPostModal.hide();
    };

  });