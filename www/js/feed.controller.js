/* globals angular */

'use strict';

angular
  .module('climatic')
  .controller('FeedController', function($scope) {
      // To begin with, let's just set some static data.
      // Later, we'll fetch this dynamically.
      $scope.posts = [{
        title: 'It\'s Sunny!',
        description: 'A lovely sunny day, as we look over the hills.',
        imageId: 'b898d7e5d33e25fa8746493e587e565a'
      }, {
        title: 'It\'s Raining.',
        description: 'It\'s really quite murky here.',
        imageId: '93112524de73b25f5789add2b458888b'
      }, {
        title: 'It\'s Windy!',
        description: 'Batten down the hatches!!!',
        imageId: '9731bf77a2a5cc8885796bcdaf078600'
      }, {
        title: 'It\'s a bit chilly.',
        description: 'Pack your hat and gloves, it\'s a chilly one today.',
        imageId: '091a9291280cf7a0a84cdd9fd3b69511'
      }, {
        title: 'Storms a-coming!',
        description: 'The outlook is rain, wind, fire and brimstone.',
        imageId: '8c1f70004c39d0574ec196b164a56339'
      }, {
        title: 'Tranquility.',
        description: 'Turn on, tune in, zone out.',
        imageId: 'fce954a46d63fd0eadc65cde6b1a28fa'
      }];
  });