'use strict';

// variables lets us to create nodejs server
var express = require('express');
var app = express();
var pjson = require('./package.json');

// custom attributes in app
app.set('version', pjson.version);
app.set('port', process.env.PORT || 3000);
app.set('url', 'localhost');

// decentralised routes
require('./routes/routes.js')(express, app);

// listen the incoming connections
app.listen(app.get('port'), app.get('url'), function() {
	console.log('App is listening on localhost:3000');
});
