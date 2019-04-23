Although nodeJS is single threaded as it spawns single thread i.e eventloop in order to perform tasks. It is not truly single threaded as NodeJS uses c++ libuv library in order to perform asyn or external tasks like fs, crypto etc.. libuv spawns 4 threads by default to perform these externl operations synchronously. 

<!-- crypto.DEFAULT_ENCODING = 'hex'; -->

### PBKDF2 - Password based key derivative function 2

crypto.pbkdf2(password, salt, iterations, keylen, digest, callback) is a password hashing algorithm used in order to hash password using node's inbuild crypto module.

It takes 5 arguments i.e
- **password** - password to be hashed
- **salt** - random string used to hash password
- **iterations** - Number of iterations 
- **keylen** -- Generated key length
- **digest** - Algorithm used to generate password
- **callback(err, hashed)** - returns result either err or hashed password


## External resources
  - https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec

	- https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/