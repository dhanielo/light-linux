'use strict';

var lightControllers = angular.module('lightControllers', []);

lightControllers.controller('dashboardController', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('http://'+$location+'/getTaskMockup').success(function(data) {
			$scope.data = data;
		});
	}]);
