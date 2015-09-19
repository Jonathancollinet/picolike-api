'use strict';

module.exports = function(req, res, next) {

	res.end(JSON.stringify({message: 'works!'}));

};