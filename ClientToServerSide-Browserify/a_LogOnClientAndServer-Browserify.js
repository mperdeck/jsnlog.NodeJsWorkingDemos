
// This demo uses jsnlog to log events, both on the client and on the server.
// It uses browserify to create a combined js file for use on the client.
// The main JavaScript for use on the client is in directory client-modules
//
// See readme.txt file for commands for getting this to work.
//
// Full documentation is at:
// http://nodejs.jsnlog.com

var JL = require('jsnlog').JL;
var jsnlog_nodejs = require('jsnlog-nodejs').jsnlog_nodejs;

var express = require('express');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser'); 
var app = express();

// In this example, static files to be sent to the client live in the public directory. 
app.use(serveStatic('public'))

// Log message directly from the server, to show you can log both from the client and from the server.
JL().info('log message from server');

// -------------------------------
// Receive and process log messages from the client

// parse application/json.
// Log messages from the client use POST and have a JSON object in the body.
// Ensure that those objects get parsed correctly.
app.use(bodyParser.json())

// jsnlog.js on the client by default sends log messages to jsnlog.logger, using POST.
app.post('*.logger', function (req, res) { 

    // Process incoming log messages, by handing to the server side jsnlog.
    // JL is the object that you got at
    // var JL = require('jsnlog').JL;
    jsnlog_nodejs(JL, req.body);

    // Send empty response. This is ok, because client side jsnlog does not use response from server.
    res.send(''); 
});

// -------------------------------

// Start listening for web requests on port 8080
app.listen(8080);


