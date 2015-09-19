'use strict';

var Deck = require("../schema/Deck");

module.exports = function(req, res, next) {
	
	var newDeck = new Deck({
		name : 'test-deck' 
	});
	
	// EUH CA MARCHE PAS ICI ...
	newDeck.save(function (err) {
		if (err) return console.error(err);
		console.log('The deck has been added !');
	});
	// END
	
	
	res.end(JSON.stringify({deck: newDeck}));

};