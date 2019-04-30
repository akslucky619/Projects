var http = require('http');
var fs = require('fs');
var path = require('path');
var userDir = path.join(__dirname, 'todo/');

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
   if (req.method === "POST" && req.url === "/"){
    var store = '';
    req.on('data', (chunk) => {
       store+= chunk.toString();
       res.write(store)
   });
   
   req.on('end', ()=>{
       var obj = queryString.parse(store)
        fs.writeFile(userDir + obj.todos + '.json', JSON.stringify(obj), (err)=>{
            if(err){
                console.log(err);
            }
        })
        res.end();
    })
}
}).listen(3000);