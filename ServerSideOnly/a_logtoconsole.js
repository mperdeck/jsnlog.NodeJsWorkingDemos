// npm install jsnlog

var JL = require('jsnlog').JL;

// --------------------------
// Log a simple message

JL().info('log message');

// --------------------------
// Log an object

var x = 5;
var y = 7;
JL().info({ x: x, y: y, msg: 'a log message'});

// --------------------------
// Log different severities

JL().trace('trace message');
JL().debug('debug message');
JL().info('info message');
JL().warn('warn message');
JL().error('error message');
JL().fatal('fatal message');

// --------------------------
// Use named loggers

JL('nodejs').info('message from logger "nodejs"');
JL('mymodule.myfunction').info('message from logger "mymodule.myfunction"');

// --------------------------
// Log an exception

try {
    // ReferenceError: xyz is not defined
    xyz;
} catch (e) {
    // Log the exception
    JL().fatalException("something went wrong!", e);
}



