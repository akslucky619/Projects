var http = require('http');
var fs = require('fs');
var path = require('path');
var userDir = path.join(__dirname, 'users/');

http.createServer((req, res) => {
   console.log(req.url);
   if (req.method === "GET" && req.url === '/'){
       fs.readFile('./index.html',null, (err, data)=> {
           if (err){
               res.writeHead(404);
               res.write('File not found');
           }
           else {
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data);
           }
           res.end();
       } )
   }
   if(req.url === '/style.css') {

       fs.readFile('./style.css', (err, file) => {
           if(err) {
               res.write('page not found');
           } else {
               res.writeHead(200, {'Content-Type': 'text/css'});
               res.write(file);
           }
           res.end()
           })
       }

   if(req.url === '/main.js') {

       fs.readFile('./main.js', (err, file) => {
           if(err) {
               res.write('page not found');
           } else {
                res.writeHead(200, {'Content-Type': 'text/js'});
                res.write(file);
           }
           res.end()
           })

   }
   if (req.method === "POST" && req.url === "/users"){
    console.log('create a post') 
    var store = '';
    req.on('data', (chunk) => {
       store+=chunk;
   });
    //    res.write('user created');
   }
   req.on('end', ()=>{
    var parsedData = JSON.parse(store)
    console.log(parsedData.username);
    fs.open(userDir + parsedData.username + '.json', 'wx', (err, fd)=> {
        console.log(fd);
        fs.writeFile(fd, store, (err)=>{
            if(err) console.log(err);
            fs.close(fd, (err)=>{
                console.log('it works');
                res.write(store);
                res.end();
            })
        })
    })
})
}).listen(3000);