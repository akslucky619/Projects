## Globals
Globals are packages or modules which are inherently availbale in our application without requiring or downloading it, like window or document which are availbale in browser based applications. Globals in nodeJS app differ from browser based globals.

Few globals in nodeJS are: 
1. require
2. process
3. modules
4. __dirname
5. __filename

### Require
Require is used to fetch external dependencies or core node modules or certain external file which is used in certain other files. There are 3 kinds of modules or files which can be fetched using require.

#### 1. Core Node Modules
These modules are available in the projects, you simply have to require them in order to use them in your project. Like Filesystem aka fs module is inhereted in every node project. In order to use them: 
```js
var fs = require('fs');
```

#### 2. NPM Modules 
Any module installed using needs to be required in order to use them.
```js
var express = require('express');
```

#### 3. External Files
In order to use functions or methods defined somewhere else in other file we need to require them first. For example say we have certain math functions like add, multiply defined in math.js, in order to use those functions we need to require them first. We provide relative path for that file in require.
```js
var math = require('./math') || require('./math.js');

math.add(2, 3)
```

### Process
Process has information about the environment the program is running in. It has several additional methods and declarations. You can access the varibales passed during start of your application using process, like process.env or process.argv.
```js
// While starting node application
>> PORT=5000 node index.js

//Inside index.js
process.env.PORT // will provide 5000
```

### __dirname__
It provides absolute path of the directory in which it gets called.
Similarily __filename__ provides absolute path of that file.

```js
console.log(__dirname) // 'home/ravi/Desktop/curriculum/core_node/node_concepts'
```
