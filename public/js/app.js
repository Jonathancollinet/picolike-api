
var picolApp = angular.module('picolApp', ['ngRoute']);

picolApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: '../templates/home.html',
			controller: 'homeController'
		});

});

picolApp.controller('homeController', ['$scope', '$log', function($scope, $log) {
	$log.warn("Salut mec c'est Angular ça marche !");
}]);