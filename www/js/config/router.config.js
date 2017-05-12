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

    $urlRouterProvider.otherwise('/posts');
  });