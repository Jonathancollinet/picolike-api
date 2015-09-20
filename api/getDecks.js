'use strict';

var Deck = require("../schema/Deck");

module.exports = function(req, res, next) {

	Deck.find({}, function(err, decks) {
		if (err) return console.error(err);

		res.end(JSON.stringify({deck: decks}));
	});
	
	
};