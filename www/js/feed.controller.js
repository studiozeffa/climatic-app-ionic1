/* globals angular */

'use strict';

angular
  .module('climatic')
  .controller('FeedController', function($scope, PostsFactory) {
      // To begin with, let's just set some static data.
      // Later, we'll fetch this dynamically.
      $scope.posts = PostsFactory.getPosts();
  });