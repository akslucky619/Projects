## CLI
CLI is a node application where all the interaction will happen through command line or terminal.

We are going to add the following commands which will be used from terminal. Any other command should be termed as invalid input.
  - man
  - help
  - date
  - exit
  - stats
  - list users
  - user info

Once server starts, we should be able to enter inputs through our terminal and for each input we should get appropriate output in terminal.

We have 3 files. 
  1. server.js: where  our server script is written
  2. cli.js: All the CLI functions will reside in this file.
  3. index.js: our main application which start server and cli modules.

In order to interact with terminal in our application, we use readline module that is node's core module.

Readline's createInterface method is used to create an interface through which there will be exchage of inputs and output to terminal.
```js
var readline = require('readline');

var _rl = readline.createInterface({
  input: process.stdin,
	output: process.stdout,
	prompt: "Enter help for more >>"
});

```
After defining createInterface from readline, we can initialize the prompt in terminal using `_rl.prompt()`.
Once prompt is defined, we should see a prompt available in terminal for providing inputs.
```js
_rl.prompt()
// Output in trerminal should look like
Enter help for more >>
```  

CreateInterface method here is an eventEmitter. It emits `line` event when some input is provided in terminal.

We can listen to line event and get input from terminal. Once input is availbale, we can pass input values to other functions to process it.

After output is printed on terminal, we should be able to see the prompt again so that we can provide input again.

```js
_rl.on('line', (input) => {
  processInput(input);
  // At last initialise the prompt again
})
```
For processing a provided input, we will check  the input with our predifined set of inputs, if input matches we are going to use node's events in order to create our custom events and will emit an event using event's eventEmitter class.

```js
var events = require('events');
var e = new events.eventEmitter();

function processInput(str) {
  // Check if input matches predefined set of inputs
  //if yes, emit an event
  e.emit('input', str);
  return;
  // if false, return an error
  console.log('Invalid Input');
}
```
Once an event is emitted, we can add listeners to listen to those named events.
```js
e.on('date', () => {
  console.log(new Date());
})
```
