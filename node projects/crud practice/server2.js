var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((req, res) => {
    
    console.log(req.url);
    if(req.method === "POST" && req.url === "/users") {
        console.log('inside post');
        var store = '';
        req.on('data', (chunk) => {
            store+=chunk;
        });
        req.on('end', () => {
            console.log(store.username);
            fs.open()
            res.end(store);
        })
    }
    if(req.method === "GET") {

    }
}).listen(3000, () => {
    console.log('server started on port 3000');
});