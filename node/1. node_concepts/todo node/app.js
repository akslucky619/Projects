const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const server = {};
const httpServer = server.httpServer = http.createServer();

httpServer.on('request', (req, res) => {
    if (req.method === 'POST' && req.url ==='/users') {
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
  res.writeHead(200, {
      'Content-Type': 'text/plain'
  });
  res.write('Welcome');
  res.end();
}
});

server.init = () => {
  httpServer.listen(8000, () => {
      console.log("Server listening on port 8000");
  });
}


module.exports = server;