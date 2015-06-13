To install and run this demo, open a command window and execute these commands from this directory.
Log messages from the server and from the client will be written to the command window.

npm install jsnlog
npm install jsnlog-nodejs

npm install jquery
npm install express
npm install serve-static
npm install body-parser

npm install -g browserify
browserify client-modules/app.js -o public/generatedjs/app.bundle.js --debug

node a_LogOnClientAndServer-Browserify.js

Open your browser, visit
http://localhost:8080/

Click the "Log to client" button on the web page to generate a log event on the client.
This will be written to the command window on the server.



