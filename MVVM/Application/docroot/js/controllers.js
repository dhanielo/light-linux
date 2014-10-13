'use strict';

var lightControllers = angular.module('lightControllers', []);

lightControllers.controller('tasksController', ['$scope', '$http', '$location',
	function ($scope, $http, $location) {
		$http.get('http://'+$location.host()+':'+$location.port()+'/getTasksMockup').success(function(data) {
			$scope.data = data;
		});
	}]);
lightControllers.controller('appsController', ['$scope', '$http', '$location', '$route',
	function ($scope, $http, $location, $route) {
		
		$http.get('http://'+$location.host()+':'+$location.port()+'/getAppsMockup').success(function(data) {
			$scope.apps = data;
		});
		$http.get('http://'+$location.host()+':'+$location.port()+'/getSources').success(function(data) {
			$scope.sources = data;
		});
		
		$scope.deleteApp = function (name) {
			var formData = { name: name };
			$http.post('http://'+$location.host()+':'+$location.port()+'/deleteApp', formData)
			.success(function() {
				$route.reload();
			})
			.error(function(e){
				flash.setMessage("Error");
			});
		};
		
		$("#create-app").click(function() {
			
			var formData = {
				name: $("#form-new-app :input[name='name']").val(),
				source: $("#form-new-app select[name='source'] option:selected").val(),
				path: $("#form-new-app :input[name='path']").val()
			};
			$http.post('http://'+$location.host()+':'+$location.port()+'/addApp', formData)
			.success(function(e){
				$route.reload();
			}).error(function(){
				flash.setMessage("Error");
			});
		});
	}]);