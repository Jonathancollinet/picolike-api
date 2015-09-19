'use strict';

// variables lets us to create nodejs server
var express = require('express'),
		app = express(),
		path = require('path'),
		pjson = require('./package.json');

// express attributes
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

// custom attributes in app
app.set('version', pjson.version || '0.0');
app.set('port', process.env.PORT || 3000);

// decentralised routes
require('./routes/routes.js')(express, app);

// listen the incoming connections
var server = require('http').createServer(app);

server.listen(app.get('port'), function() {
	console.log('localhost:', app.get('port'));
});
