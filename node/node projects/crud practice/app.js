var http = require('http');
var url = require('url');
var path = require('path');
var usersDir = path.join(__dirname, 'users/');
var fs = require('fs')

http.createServer((req, res) => {
  var parsed = url.parse(req.url, true)
  if(req.method === "POST" && req.url === "/users") {
      console.log('inside post');
      var store = '';
      req.on('data', (chunk) => {
          store+=chunk;
      });
      req.on('end', () => {
          var parsedData = JSON.parse(store)
          console.log(parsedData.username);
          fs.open(usersDir + parsedData.username + '.json', 'wx', (err, fd) => {
      console.log(err, fd);
      fs.writeFile(fd, store, (err) => {
      if(err) console.error(err);
      fs.close(fd, (err) => {
          console.log('success');
          res.write(store);

      })
  })
});

      })
  }
  if(req.method === "GET") {

      fs.readFile(usersDir + parsed.query.username + '.json', (err, data) => {
  if (err) console.error(err);
  console.log(data.toString());
  res.end()
});
}
      if(req.method === "PUT") {
          console.log('Hello')
          fs.open(usersDir + parsed.query.username + '.json', 'r+', (err, fd) => {
      if (err) console.error(err);
      console.log(fd);
      fs.ftruncate(fd, 0 , (err) => {
      if (err) console.log(err);

      });
      var store = '';
      req.on('data', (chunk) => {
          store+=chunk;
      fs.writeFile(fd, store, (err) => {
      if(err) console.error(err);
      fs.close(fd, (err) => {
          console.log('success')


      })
  res.end();
  })
})
})

      }

      if(req.method === "DELETE") {
  fs.unlink(usersDir + parsed.query.username + '.json', (err) => {
  if(err) console.error(err)
      console.log('Success')

})
}

}).listen(3000, () => {
  console.log('server started on port 3000');
});