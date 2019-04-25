// Dependencies

var server = require('./server');
var cli = require('./cli');

const app = {};

app.init = () => {
  //Initialise server
  server.init();

  //Initialise CLI after some time
  setTimeout(() => {
      cli.init();
  }, 50);
}

// Self executing
app.init();
