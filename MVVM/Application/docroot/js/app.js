'use strict';

var lightApp = angular.module('lightApp', [
'ngRoute',
'lightControllers'
]);

lightApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/tasks', {
        templateUrl: 'tasks.html',
        controller: 'tasksController'
      }).
	  when('/apps', {
		templateUrl: 'apps.html',
		controller: 'appsController'
	  });
  }]);
