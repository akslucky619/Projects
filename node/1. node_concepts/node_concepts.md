## What is node ?
Node is an open-source, cross-platform, runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. The runtime is intended for use outside of a browser context (i.e. running directly on a computer or server OS). As such, the environment omits browser-specific JavaScript APIs and adds support for more traditional OS APIs including HTTP and file system libraries.
  
  - server-side javascript runtime environment(v8)
  - node build on top of chrome v8 javascript engine

### NodeJS presents itself as 2 apps 
#### 1. A Script processor
  - Initialises process called event loop
  - Reads in file you specify
  - Reads all deps in file and all deps of those file
  - Executes sync tasks as soon as encountered in those files.
  - Processes todo list of async task(Non-blocking) by repeating event loop until   it has nothing to do.
  - example for running a node script
  ```js
  node index.js(script_file name)
  ```
#### 2. REPL(Read Eval Print Loop)
  - inteactive jS runtime which execs JS code on go
  - like console in browsers
  - starts event loop in background and waits for code snippets
  - for running **REPL** type node in **TERMINAL**
  ```js
  node
  ```

### V8
  - v8 is js engine
	  1. optimizes code at runtime to make it faster
		2. standalone app(no direct interaction)
		  - interaction on chrome or debugger
    3. Examples of javscript engines
		  1. JavascriptCore(safari)
		  2. Spidermonkey(firefox) 
        - first js engine 
        - created by brandon eike 
	    3. chakra(IEx)
		
  - browsers have embedded js engines to execute it
  - v8 acts as an interpreter in our system

### Computer Execution
To execute high level code, computer uses:
  1. Interpreters(compile+execute)
    - take source code and execute it by taking realtime intermediate steps like compiling it.
  2. Compilers
    - turns source code into executables(machine code)
  3. Transpilers
    - turns source code into source code of other type
    - like coffeescript to javascript or scss /sass to css

#### Additional resources
  1. https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
  