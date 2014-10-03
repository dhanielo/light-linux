'use strict';

var lightControllers = angular.module('lightControllers', []);

lightControllers.controller('dashboardController', ['$scope', '$http',
	function ($scope, $http) { 
		$http.get('/dashboard/data.json').success(function(data) {
			$scope.data = data;
		});
	}]);
