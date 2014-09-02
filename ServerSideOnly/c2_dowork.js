// npm install jsnlog

var JL = require('jsnlog').JL;

var dowork = function () {
    JL().info('info message from dowork');
    JL().error('error message from dowork');
} 
    
exports.dowork = dowork;


