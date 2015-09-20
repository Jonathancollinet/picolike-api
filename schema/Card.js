'use strict';

var mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({

	family: { type: mongoose.Schema.Types.ObjectId, ref: 'Deck' },
	name: { type: String, default: 'No Name' },
	isValid: { type: Boolean, default: true },
	description: { type: String, default: 'No description' }
	
});

var Card = mongoose.model('Card', cardSchema);

module.exports = Card;
