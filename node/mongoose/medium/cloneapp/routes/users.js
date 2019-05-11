var express = require('express');
var router = express.Router();
var Users = require('../models/user')
var session = require('express-session')
var mongoose = require('mongoose')
/* GET users listing. */
router.get('/new', function(req, res) {
  res.render('userform');
});

router.post('/new', function (req, res,next) {
    Users.create(req.body, (err, result)=>{
      if(err) return next(err);
      res.redirect('/users')
    })
})

router.get('/', function(req, res) {
  Users.find({}, (err, userlist) => {
      if(err) return next(err);
      res.render('userdisplay', {allusers: userlist})
  })
});

router.get('/:id/delete',(req, res, next)=>{
  var id = req.params.id;
  Users.findByIdAndDelete(id, (err)=>{
    if(err) return next(err);
    res.redirect('/users')
  })
});

router.get('/login', function (req, res) {
  res.render('loginform')
});

router.post('/login', (req, res, next)=>{
  console.log(req.body);
  var {email, password} = req.body;
  if(!email || !password){
    return res.redirect('/users/login');
  }
  Users.findOne({email: email}, (err, user)=>{
    console.log(err, user);
    if (err) return res.status(500).next(err);
    if(!user) return res.status(400).redirect('/users/login');
    console.log(user);
    if(!user.validatePassword (password)) return res.status(400).redirect('/users/login')
    req.session.userId = user._id;
    res.status(200).send("session created");
  })
})

router.get('/logout',(req, res)=>{
  if(req.session){
    req.session.destroy(); 
    res.render('loginform')
  }    
})

module.exports = router;
