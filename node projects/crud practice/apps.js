var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs')
var userDir = path.join(__dirname, 'users/');

http.createServer((req, res)=>{
    var parsed = url.parse(req.url, true)
    if (req.method === 'POST' && req.url ==='/users') {
       console.log('create a post') 
       var store = '';
       req.on('data', (chunk) => {
          store+=chunk;
      });
      req.on('end', ()=>{
          var parsedData = JSON.parse(store)
          console.log(parsedData.username);
          fs.open(userDir + parsedData.username + '.json', 'wx', (err, fd)=> {
              console.log(err,fd);
              fs.writeFile(fd, store, (err)=>{
                  if(err) console.log(err);
                  fs.close(fd, (err)=>{
                      console.log('it works');
                      res.write(store);
                  })
              })
          })
      })
    }


}).listen(4000, () => {
    console.log('server started on port 4000');
  });