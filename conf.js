'use strict';

var pjson = require('./package.json');

//AppName
exports.appName = 'picolike';

//Version
exports.version = pjson.version || '0.0';

//Port
exports.port = process.env.PORT || 3000;

//DB
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||
			process.env.MONGO_URL || 'mongodb://localhost/'+ exports.appName
};
