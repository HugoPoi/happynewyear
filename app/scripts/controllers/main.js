'use strict';

/**
 * @ngdoc function
 * @name newyearApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newyearApp
 */
angular.module('newyearApp')
  .controller('MainCtrl', function ($scope, $interval) {

    $scope.config = {
      target: '2015-01-01 00:00:00',
      showpanel: false
    };

    $scope.configpanel = function(){
      $scope.config.showpanel = !$scope.config.showpanel;
    };

    $interval(function(){
      $scope.duration = moment.duration(moment($scope.config.target).diff());
    }, 50);


  }).filter('numberFixedLen', function () {
    return function(a,b){
        if(a < 0){
          a = -a;
        }
        return(1e4+a+'').slice(-b);
    };
  });
