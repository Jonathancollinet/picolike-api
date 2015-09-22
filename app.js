'use strict';

// variables lets us to create nodejs server
var conf = require('./conf'),
		express = require('express'),
		app = express(),
		path = require('path');

//Load the configuration file
app.conf = conf;

// express attributes
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

// custom attributes in app
app.set('title', conf.appName);
app.set('version', conf.version);
app.set('port', conf.port);

// decentralised routes
require('./routes/routes.js')(express, app);


// listen the incoming connections
var server = require('http').createServer(app);

server.listen(app.get('port'), function() {
	console.log('localhost:', app.get('port'));
});
