/* globals angular */

'use strict';

angular
  .module('climatic')
  .controller('FeedController', function($scope, PostsFactory, $ionicLoading) {
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
      template: 'Loading...'
    });
    PostsFactory.getPosts().then(function(resp) {
      handleResponse(resp);
      $ionicLoading.hide();
    });
  });