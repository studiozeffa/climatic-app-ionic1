/* globals angular */

'use strict';

angular
  .module('climatic')
  .controller('FeedController', function($scope, PostsFactory) {
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

    PostsFactory.getPosts().then(function(resp) {
      handleResponse(resp);
    });
  });