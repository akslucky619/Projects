var http = require("http");
http.createServer((req, res)=>{
    console.log(req.url)
    res.write("hello")
    res.end();
}).listen(3000, ()=>{
    console.log("server");
})