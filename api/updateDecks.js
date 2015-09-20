'use strict';

var Card = require('../schema/Card');

module.exports = function(req, res, next) {

	res.end(JSON.stringify({message: 'Yo y a rien encore ici!'}));

};