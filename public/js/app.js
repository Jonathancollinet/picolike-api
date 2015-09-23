'use strict';

var picolApp = angular.module('picolApp', ['ngRoute', 'firebase']);

picolApp.config(function($routeProvider, $interpolateProvider) {

	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');

	$routeProvider
		.when('/', {
			templateUrl: '../templates/home.html',
			controller: 'homeController'
		})
		.when('/createCard', {
			templateUrl: '../templates/createCard.html',
			controller: 'createCardCtrl'
		})
		.when('/createDeck', {
			templateUrl: '../templates/createDeck.html',
			controller: 'createDeckCtrl'
		})
		.when('/addCardToDeck', {
			templateUrl: '../templates/addCardToDeck.html',
			controller: 'addCardToDeckCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});

picolApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

	$scope.links = [
		{item: "#/", label: "Home Page"},
		{item: "#/createCard", label: "Créer une carte"},
		{item: "#/createDeck", label: "Créer un deck"},
		{item: "#/addCardToDeck", label: "Ajouter une carte dans un deck"},
	];

}]);

picolApp.controller('homeController', ['$scope', '$log', function($scope, $log) {

}]);

picolApp.controller('createCardCtrl', ['$scope', '$log', function($scope, $log) {

	$scope.card = {};

	$scope.submit = function() {
		console.log("submit !");
		console.log($scope.card);
	}

}]);

picolApp.controller('createDeckCtrl', ['$scope', '$log', '$firebaseArray', function($scope, $log, $firebaseArray) {

	var ref = new Firebase("https://picolike.firebaseio.com/decks");
	
	$scope.decks =  $firebaseArray(ref);

	$scope.submit = function() {
		$scope.decks.$add({name: $scope.decks.new });
	}


}]);

picolApp.controller('addCardToDeckCtrl', ['$scope', '$log', function($scope, $log) {

}]);
