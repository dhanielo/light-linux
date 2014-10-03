'use strict';

var lightApp = angular.module('lightApp', [
'ngRoute',
'lightControllers'
]);

lightApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'dashboard.html',
        controller: 'dashboardController'
      });
  }])
