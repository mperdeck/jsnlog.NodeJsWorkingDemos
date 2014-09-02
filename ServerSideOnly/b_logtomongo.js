// npm install jsnlog
// npm install winston
// npm install winston-mongodb

// This demo shows how to log to a MongoDB database.
//
// It also shows that jsnlog.js works with Winston transports,
// because this demo uses the transport winston-mongodb.
// You can use any Winston transport with jsnlog.js in a similar way.

var JL = require('jsnlog').JL;

// Note that you must first require winston before requiring a winston transport
var winston = require('winston');
require('winston-mongodb').MongoDB;


// ------------------------------------------------------
// Set root logger (the logger with no name) so it uses
// winston-mongodb as an appender (aka transport).
// In jsnlog.js, all named loggers inherit from the root logger, so all your loggers now talk
// to your Mongo database.
//
// Run this code once, when your program starts.
// jsnlog.js remembers these settings internally.

// The options passed to the winston.transports.MongoDB constructor are described at:
// https://github.com/indexzero/winston-mongodb
// The specific options below are just an example. Use any options you want.
var mongo_appender = new winston.transports.MongoDB({ db: 'logs', collection: 'log' });
    
JL().setOptions({ "appenders": [mongo_appender] });

// --------------------------
// Log a simple message

JL().info('log message');

// --------------------------
// Log an object, using a named logger

var x = 5;
var y = 7;
JL('nodejs').warn({ x: x, y: y, msg: 'a log message'});

// --------------------------
// Log an exception, with its stack trace

try {
    // ReferenceError: xyz is not defined
    xyz;
} catch (e) {
    // Log the exception
    JL().fatalException("something went wrong!", e);
}




