var readline = require('readline');
var events = require('events');
var e = new events.EventEmitter();


var cli = {};

e.on('date', (val)=>{
  // console.log(new Date())
});

e.on('exit', (val)=>{
  // console.log(new Date())
});

e.on('help', (val)=>{
  console.log("help on the way")
});



cli.init = () => {
  console.log('CLI is running');
  var rl = readline.createInterface({input: process.stdin,output:process.stdout,prompt:"help unavailable"})
  rl.prompt();
  rl.on('line', (str)=>{
    // console.log(str);
    cli.processInput(str);
  })
};
cli.processInput = (str)=>{
  var uniqueInput = ['exit', 'date', 'help'];
  uniqueInput.some(input =>{
    if(str.toLowerCase().indexOf(input)> -1){
      // var e = new EventEmitter
      console.log(input, str);
      e.emit(input, str);
      // e.on('date', (str)=>{
      //   console.log("new date");
      // })
    }
  })
};
module.exports = cli;