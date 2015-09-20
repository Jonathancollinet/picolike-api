'use strict';

var Card = require('../schema/Card');

module.exports = function(req, res, next) {

	var newCard = new Card({
		family: "55feb9649350478e02ad0ebd",
		name: 'La carte qui fais mal',
		isValid: true,
		description: "Pile ou face, pile 6 verres pour toi, face 3 verres pour chacun de tes collegues lateraux."
	});

	newCard.save(function(err) {
		if (err) res.end('Error dude!\n' + err);
		else {
			res.end('Card successfully added to deck !\n' + JSON.stringify({card: newCard}));
		}
	});

}