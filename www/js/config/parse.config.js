/* globals angular, window */

'use strict';

angular
  .module('climatic')
  .config(function() {
    var Parse = window.Parse;
    Parse.initialize('climatic');
    Parse.serverURL = 'https://climatic.herokuapp.com/api';
  });