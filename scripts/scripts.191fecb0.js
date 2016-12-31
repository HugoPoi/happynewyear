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

'use strict';

/**
 * @ngdoc function
 * @name newyearApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newyearApp
 */
angular.module('HappyNewYearCountdown')
  .controller('MainCtrl', function ($scope, $interval, $http, $location) {

    $scope.config = {
      target: moment().endOf('year'),
      showpanel: false
    };

    $scope.configpanel = function(){
      $scope.config.showpanel = !$scope.config.showpanel;
    };

    var intervalPromise = $interval(function(){
      $scope.duration = moment.duration(moment($scope.config.target).diff());
      if($scope.duration <= 0){
        $interval.cancel(intervalPromise);
        $location.path('/newyear');
      }
    }, 50);

    $http.get('/scripts/fonts_list.json').then(function(result){
      $scope.fonts = result.data;
    });
  })
  .controller('NewYearCtrl', function () {
    const container = document.getElementById('fireworks');
    const options = {
      maxRockets: 3,            // max # of rockets to spawn
      rocketSpawnInterval: 300, // millisends to check if new rockets should spawn
      numParticles: 100,        // number of particles to spawn when rocket explodes (+0-10)
      explosionHeight: 0.5,     // minimum percentage of height of container at which rockets explode
      explosionChance: 0.07     // chance in each tick the rocket will explode
    }
    const fireworks = new Fireworks.start(container, options)
  })
  .filter('numberFixedLen', function () {
    return function(a,b){
        if(a < 0){
          a = -a;
        }
        return(1e4+a+'').slice(-b);
    };
  });
