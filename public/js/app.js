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
		.when('/deleteCard', {
			templateUrl: '../templates/deleteCard.html',
			controller: 'deleteCardCtrl'
		})
		.when('/createDeck', {
			templateUrl: '../templates/createDeck.html',
			controller: 'createDeckCtrl'
		})
		.when('/deleteDeck', {
			templateUrl: '../templates/deleteDeck.html',
			controller: 'deleteDeckCtrl'
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
		{item: "#/deleteCard", label: "Supprimer une carte"},
		{item: "#/createDeck", label: "Créer un deck"},
		{item: "#/deleteDeck", label: "Supprimer un deck"},
		{item: "#/addCardToDeck", label: "Ajouter une carte dans un deck"},
	];

}]);

picolApp.controller('homeController', ['$scope', '$log', function($scope, $log) {

}]);

picolApp.controller('createCardCtrl', ['$scope', '$log', '$firebaseArray', function($scope, $log, $firebaseArray) {

	var ref = new Firebase("https://picolike.firebaseio.com/cards");
	var ref2 = new Firebase("https://picolike.firebaseio.com/decks");

	$scope.cards = $firebaseArray(ref);
	$scope.decks = $firebaseArray(ref2);

	$scope.submit = function() {
		console.log($scope.cards.color);
		$scope.cards.$add({dn: $scope.deckselect,
		name: $scope.cards.new, desc: $scope.cards.description,
							color: $scope.cards.color
											});
	}

	$scope.cards.$loaded()
		.then(function(data) {

				for (var i = 0; i < data.length; i++) {
					$scope.cards.cardColor = data[i].color.toString();
					console.log("color:", $scope.cards.cardColor);
				};
		});
}]);

picolApp.controller('createDeckCtrl', ['$scope', '$log', '$firebaseArray', function($scope, $log, $firebaseArray) {

	var ref = new Firebase("https://picolike.firebaseio.com/decks");

	$scope.decks =  $firebaseArray(ref);

	$scope.submit = function() {
		$scope.decks.$add({name: $scope.decks.new, num: $scope.decks.num });
	}

}]);

picolApp.controller('deleteCardCtrl', ['$scope', '$log', function($scope, $log) {

}]);

picolApp.controller('deleteDeckCtrl', ['$scope', '$log', function($scope, $log) {

}]);
