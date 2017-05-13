/* globals angular */

'use strict';

angular
  .module('climatic')
  .controller('FeedController', function($scope, PostsFactory, CameraFactory, $ionicLoading, $ionicModal, $ionicPopup) {

    /** Feed */
    function handleResponse(resp) {
      $scope.posts = resp.posts;
      $scope.hasMorePosts = resp.hasMore;
    }

    $scope.loadMorePosts = function() {
      PostsFactory.getNextPosts().then(function(resp) {
        handleResponse(resp);
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    $ionicLoading.show({
      template: '<ion-spinner icon="lines"></ion-spinner>'
    });
    PostsFactory.getPosts().then(function(resp) {
      handleResponse(resp);
      $ionicLoading.hide();
    });


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
        .catch(function(error) {
          console.warn('Error getting picture:');
          console.warn(error);
        });
    };

    $scope.savePost = function() {
      console.log('Saving!');
      $scope.addPostModal.hide();
    };

    $scope.cancelPost = function() {
      console.log('Cancelling!');
      $scope.addPostModal.hide();
    };

  });