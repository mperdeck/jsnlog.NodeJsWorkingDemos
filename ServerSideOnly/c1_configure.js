// npm install jsnlog

// This example demonstrates a program consisting of multiple files, and how you only
// need to configure jsnlog once, during startup.

// It is this file that will be run from the command line. 
// It configures jsnlog, to only log messages of severity error or higher.
// It then calls the main function in file c2_main to do some work.

var JL = require('jsnlog').JL;

JL().setOptions({
    "level": JL.getErrorLevel()
});


// Require main module and call main function.
// This generates a trace log message and an error log message.
// After setting the level to error in this file, only the error message will be logged.

var dowork = require('./c2_dowork').dowork;

dowork();



