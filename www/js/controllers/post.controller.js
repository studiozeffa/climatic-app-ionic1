/* globals angular */

'use strict';

angular
  .module('climatic')
  .controller('PostController', function($scope, PostsFactory, $stateParams) {
    var id = $stateParams.id;
    $scope.post = PostsFactory.getPostById(id);
  });