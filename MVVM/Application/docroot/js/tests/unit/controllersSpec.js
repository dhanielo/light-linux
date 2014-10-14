'use strict'
describe('lightApp', function(){

beforeEach(module('lightApp'));

	describe('appsController', function () {
	    var scope, httpMock, controller, http;
		beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
			scope = $rootScope.$new();
			controller = $controller;
			httpMock = $httpBackend;
			http = $http;
            httpMock.when("GET", "http://localhost:9090/getAppsMockup").respond([{}, {}, {}]);
		}));
		
		it('Must return apps', function() {
			httpMock.expectGET('http://localhost:9090/getAppsMockup').respond('ping');
            controller('appsController', {
                $scope: scope,
                $http: http
            });
            httpMock.flush();
			expect(scope.apps).toBe('ping');
		});
	});
});