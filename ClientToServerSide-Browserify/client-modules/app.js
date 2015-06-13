
'use strict';

var $ = require('jquery');
var JL = require('jsnlog').JL;

function _sendLogEntry() {
    JL('client').info('message from the client');
}

function _registerEventHandlers() {
    $("#log-to-client-button").on("click", _sendLogEntry);
}

_registerEventHandlers();




