var http = require('http');
var fs = require('fs');
var path = require('path');
var usersDir = path.join(__dirname, 'form/');
var queryString = require('querystring');
var chalk = require('chalk');

var mongodb = require('mongodb');
var conn;

mongodb.connect("mongodb://localhost:27017", (err, db)=>{
    conn = db;
})



var server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === '/'){
        var line = '';
        fs.readdir(usersDir, (err, dataitems) => {
            if (err) {
                console.log('error');
            }
            fs.readFile('./index.html',null, (err, data)=> {
                if (err){
                    res.writeHead(404);
                    res.write('File not found');
                    res.end()
                }
                else {
                    line += data.toString();
                    line += "<br><br>"

                    dataitems.forEach(elm => {
                        var fileContent = fs.readFileSync(usersDir + elm)
                        line += JSON.stringify(JSON.parse(fileContent));
                        line += "<br>"
                    })
 
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(line);
                    res.end();
 
                }
            } )
        })
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
 
    if(req.url === '/app.js') {
 
        fs.readFile('./app.js', (err, file) => {
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
        console.log('Hello');
        let store = '';
        req.on('data', (chunk) => {
            store += chunk.toString();
            res.write(store);
        })
        req.on('end', () => {
            console.log(store, conn);
            var hack = queryString.parse(store);
            
            collection = conn.db('myDb').collection("hack");
            collection.insert({name:hack.name, email:hack.email, password:hack.password});

            res.end()
            })
    }
 }).listen(4000, () => {
    console.log(chalk.red('Server running on port') + ' 4000' + chalk.red('!'));;
 })