'use strict';

/**
 * @ngdoc overview
 * @name calcApp
 * @description
 * # calcApp
 *
 * Main module of the application.
 */
angular
  .module('calcApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/calculator', {
        templateUrl: 'views/calculator.html',
        controller: 'CalculatorCtrl',
        controllerAs: 'calculator'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
