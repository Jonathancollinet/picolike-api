'use strict';

var Deck = require("../schema/Deck");

module.exports = function(req, res, next) {

	var newDeck = new Deck({
		name : 'test-deck'
	});
	
	newDeck.save(function (err) {
		if (err) res.end('Error dude!\n' + err);
		else {
			res.end('Deck created !\n' + JSON.stringify({deck: newDeck}));
		}
	});

};