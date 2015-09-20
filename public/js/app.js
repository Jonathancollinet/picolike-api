'use strict';

var picolApp = angular.module('picolApp', ['ngRoute']);

picolApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

	

}]);

picolApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: '../templates/home.html',
			controller: 'homeController'
		});

});

picolApp.controller('homeController', ['$scope', '$log', function($scope, $log) {
	$scope.toto = "ototo";
}]);
