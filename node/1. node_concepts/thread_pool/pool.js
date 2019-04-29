// uses process global to alter thread pool size
process.env.UV_THREADPOOL_SIZE = 2;

// Require node's build in crypto module
var crypto = require('crypto');

// Require node's fs and https module
var fs = require('fs');
var https = require('https');


// Set keylen variable for crypto's pbkdf2 function
var keylen = 256;

// Note start time for benchmarking result of operation(in milliseconds)
var start_time = Date.now();

// crypto's pbkdf2 method for hashing password
crypto.pbkdf2('a', 'b', 100000, keylen, 'sha512', (err, hashed) => {
    console.log('time1: ' + (Date.now() - start_time))
    // console.log(hashed.toString('hex'));
});

crypto.pbkdf2('a', 'b', 100000, keylen, 'sha512', (err, hashed) => {
    console.log('time2: ' + (Date.now() - start_time))
});

crypto.pbkdf2('a', 'b', 100000, keylen, 'sha512', (err, hashed) => {
    console.log('time3: ' + (Date.now() - start_time))
});

crypto.pbkdf2('a', 'b', 100000, keylen, 'sha512', (err, hashed) => {
	console.log('time4: ' + (Date.now() - start_time))
});

// crypto.pbkdf2('a', 'b', 100000, keylen, 'sha512', (err, hashed) => {
// 	console.log('time5: ' + (Date.now() - start_time))
// });

// var hashed = crypto.pbkdf2Sync('a', 'b', 100000, keylen, 'sha512')
// console.log('time1: ' + (Date.now() - start_time))

// var hashed = crypto.pbkdf2Sync('a', 'b', 100000, keylen, 'sha512')
// console.log('time2: ' + (Date.now() - start_time))

// var hashed = crypto.pbkdf2Sync('a', 'b', 100000, keylen, 'sha512')
// console.log('time3: ' + (Date.now() - start_time))

// // https is core node's module used to do network requests
// function doRequest() {
// 	https.request('https://www.google.com', res => {
// 		res.on('data', (chunk) => {})
// 		res.on('end', () => {
// 			console.log('network: ', Date.now() - start_time)
// 		});
// 	}).end()
// }

// function doHash() {
// 	crypto.pbkdf2('a', 'b', 100000, keylen, 'sha512', (err, hashed) => {
// 		console.log('hash: ', Date.now() - start_time)
// 	});
// }

// // readFile method to read from a file in fs


// doRequest()



// doHash()
// doHash()
// doHash()

// fs.readFile('thread-pool.js', 'utf8', () => {
//     console.log('FS:', Date.now() - start_time)
// })






