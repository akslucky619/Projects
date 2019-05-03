var express = require("express");
var path = require("path")
var app = express();
var userDir = path.join(__dirname, "public");
var cookieParser = require('cookie-parser');




app.use(cookieParser());

app.use((req, res, next)=>{
    res.cookie("name", "akash");
    next();
})

app.use((req, res, next)=>{
    console.log(req.url)
    next();
})

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
    res.render("grid");
  });

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "public")))

app.post("/",(req, res)=>{
    console.log(req.body)
    res.send(req.body)
    ;
});

app.get('/', (req, res)=>{
    res.send("hello worrrrrld");
})

app.listen(4000, ()=>{
    console.log("server started on port 4000")
})
