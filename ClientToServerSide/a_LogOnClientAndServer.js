// npm install jsnlog
// npm install jsnlog-nodejs

// npm install express
// npm install serve-static
// npm install body-parser

// -------------------------------

// After you've installed jsnlog from NPM, be sure to copy the file jsnlog.js from 
// node_modules/jsnlog to the directory where you keep the .js files that are loaded by the client.
// In this example, that directory is called "public".

// If you use browserify, make sure that jsnlog.js is included in the set of .js files that will
// be sent to the client.

// Full documentation is at:
// http://nodejs.jsnlog.com

var JL = require('jsnlog').JL;
var jsnlog_nodejs = require('jsnlog-nodejs').jsnlog_nodejs;

var express = require('express');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser'); 
var app = express();

// In this example, static files to be sent to the client (such as jsnlog.js) live in the public directory. 
app.use(serveStatic('public'))

// Log message directly from the server, to show you can log both from the client and from the server.
JL().info('log message from server');

// -------------------------------
// Create response for to reqests for the home page /, such as 
// http://localhost:8080
// This doesn't use a template, to keep it simple.
//
// Note that this tiny little page loads jsnlog.js with a script tag,
// and creates a button whose click handler logs a message and an object.
var pageHtml =
    "<html>\n" +
    "<head>\n" +
    "<script src='jsnlog.js'></script>\n" +
    "<script>\n" +
    "function clickhandler() { \n" +
    "    JL('client').info('message from the client');\n" +
    "    JL('client').debug({x: 5, y: 7});\n" +
    "}\n" +
    "</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "<h1>Test page</h1>\n" +
    "<button onclick='clickhandler()'>Send log message from client to server</button\n" +
    "</body>\n" +
    "</html>";

app.get('/', function (req, res) {
    res.send(pageHtml);
});

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


