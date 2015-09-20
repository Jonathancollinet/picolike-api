'use strict';

var mongoose = require('mongoose');

exports = module.exports = function(app, mongoose) {

	var cardSchema = new mongoose.Schema({
	
		family: { type: mongoose.Schema.Types.ObjectId, ref: 'Deck' },
		name: { type: String },
		isValid: { type: Boolean, default: true }
		
	});
	
	app.db.model('Card', cardSchema);
	
};