'use strict';

var lightControllers = angular.module('lightControllers', []);

lightControllers.controller('dashboardController', ['$scope', '$http',
	function ($scope, $http) { console.log('ok');
		$http.get('/dashboard/data.json').success(function(data) {
			$scope.data = data;
			console.log(data);
		});
	}]);
