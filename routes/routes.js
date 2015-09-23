'use strict';

module.exports = function(express, app) {
	var router = express.Router();

	router.get('/', function(req, res, next) {
		res.render('index.html', {version: app.get('version')});
	});

	// route for add a deck
	router.get('/addDeck');

	// route for add a card to a deck
	router.get('/addCardToDeck');

	// route for check if deck is up to date
	router.get('/updateDecks');
	
	// route for find all decks
	router.get('/getDecks');

	app.use('/', router);
}