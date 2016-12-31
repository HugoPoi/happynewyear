'use strict';

/**
 * @ngdoc overview
 * @name newyearApp
 * @description
 * # newyearApp
 *
 * Main module of the application.
 */
angular
  .module('HappyNewYearCountdown', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newyear', {
        templateUrl: 'views/newyear.html',
        controller: 'NewYearCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
