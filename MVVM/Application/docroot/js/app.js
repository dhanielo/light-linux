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

app.factory("flash", function($rootScope) {
  var queue = [];
  var currentMessage = "";

  $rootScope.$on("$routeChangeSuccess", function() {
    currentMessage = queue.shift() || "";
  });

  return {
    setMessage: function(message) {
      queue.push(message);
    },
    getMessage: function() {
      return currentMessage;
    }
  };
});