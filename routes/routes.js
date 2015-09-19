'use strict';

module.exports = function(express, app) {
	var router = express.Router();

	router.get('/', function(req, res, next) {
		res.end('Welcome to Picolike API ' + app.get('version'));
	})

	router.get('/updateDecks/', require('../api/updateDecks'));

	app.use('/', router);
}