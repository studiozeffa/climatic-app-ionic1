/* globals angular */

'use strict';

angular
  .module('climatic')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('feed', {
      url: '/posts',
      templateUrl: 'html/feed.html',
      controller: 'FeedController'
    });

    $stateProvider.state('post', {
      url: '/posts/:id',
      templateUrl: 'html/post.html',
      controller: 'PostController'
    });

    $urlRouterProvider.otherwise('/posts');
  });