'use strict';

/**
 * @ngdoc function
 * @name newyearApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newyearApp
 */
angular.module('newyearApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
