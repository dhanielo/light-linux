'use strict';

var lightControllers = angular.module('lightControllers', []);

lightControllers.controller('tasksController', ['$scope', '$http', '$location',
	function ($scope, $http, $location) {
		$http.get('http://'+$location.host()+':'+$location.port()+'/getTasksMockup').success(function(data) {
			$scope.data = data;
		});
	}]);
lightControllers.controller('appsController', ['$scope', '$http', '$location',
	function ($scope, $http, $location) {
		$http.get('http://'+$location.host()+':'+$location.port()+'/getAppsMockup').success(function(data) {
			$scope.apps = data;
		});
		$http.get('http://'+$location.host()+':'+$location.port()+'/getSources').success(function(data) {
			$scope.sources = data;
		});
	}]);