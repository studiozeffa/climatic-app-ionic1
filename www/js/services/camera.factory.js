/* globals angular, window */

'use strict';

angular
  .module('climatic')
  .factory('CameraFactory', function($cordovaCamera, $ionicPlatform) {
    function takePicture() {
      return $ionicPlatform.ready().then(function() {
        var Camera = window.Camera;
        if(!Camera) {
          throw new Error('Camera unavailable. Are you in the browser?');
        }

        var options = {
          quality: 80,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 960,
          saveToPhotoAlbum: false,
          correctOrientation: true
        };

        return $cordovaCamera.getPicture(options);
      });
    }

    return {
      takePicture: takePicture
    };
  });