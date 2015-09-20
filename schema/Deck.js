'use strict';

var mongoose = require('mongoose');

var deckSchema = new mongoose.Schema({

	name: { type: String }

});
	
var Deck = mongoose.model('Deck', deckSchema);
	
module.exports = Deck;