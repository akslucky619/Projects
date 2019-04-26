var readline = require('readline');
var events = require('events');
var e = new events.EventEmitter();


var cli = {};

var help = {
    'date':'This is date menu',
    'help': 'This is help menu',
    'exit': 'This is exit menu',
}

e.on('date', (val)=>{
  console.log(new Date())
});

e.on('exit', (val)=>{
  process.exit(0);
});

e.on('help', (val)=>{
  for (let key in help) {
		var line = '';
		line = key;
		var padding = 42 - key.length;
		for(let i = 0; i <= padding; i++) {
			line += ' ';
		}
		line +=help[key];
		console.log(line);
	}
  console.log(line)
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
      //   console.log(new Date());
      // })
    }
  })
};
module.exports = cli;