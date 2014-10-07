'use strict';

var lightControllers = angular.module('lightControllers', []);

lightControllers.controller('tasksController', ['$scope', '$http',
	function ($scope, $http, $location) {
		$http.get('http://'+$location+'/getTaskMockup').success(function(data) {
			$scope.data = data;
		});
	}]);
