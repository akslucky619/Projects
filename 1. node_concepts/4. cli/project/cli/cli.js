var readline = require('readline');
var events = require('events');
var e = new events.EventEmitter();


var cli = {};

cli.init = () => {
  console.log('CLI is running');
};

module.exports = cli;