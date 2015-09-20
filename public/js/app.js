'use strict';

var picolApp = angular.module('picolApp', ['ngRoute']);

picolApp.config(function($routeProvider, $interpolateProvider) {

	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');

	$routeProvider
		.when('/', {
			templateUrl: '../templates/home.html',
			controller: 'mainController'
		});


});

picolApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

	$log.warn('yo');

	$scope.links = [
		{item: "#/createCard", label: "Créer une carte"},
		{item: "#/createDeck", label: "Créer un deck"},
		{item: "#/addCardToDeck", label: "Ajouter une carte dans un deck"},
	];

	console.log($scope);

}]);

picolApp.controller('homeController', ['$scope', '$log', function($scope, $log) {

}]);
