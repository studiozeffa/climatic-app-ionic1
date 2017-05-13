/* globals angular */

'use strict';

angular
  .module('climatic')
  .controller('FeedController', function($scope, PostsFactory, $ionicLoading, $ionicModal) {

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
      description: ''
    };

    $scope.openAddPostModal = function() {
      $scope.addPostModal.show();
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