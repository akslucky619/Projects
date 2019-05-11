var Users = require('../models/userdata');
var session = require('express-session');

exports.userDisplay = function(req, res) {
    Users.find({}, (err, userlist) => {
        if(err) return next(err);
        res.render('usersdisplay', {allusers: userlist})
    })
};

exports.loginForm = function (req, res) {
    res.render('loginform')
};

exports.checkSession = (req, res, next)=>{
    console.log(req.body)
    var {email, password} = req.body;
    if(!email || !password){
      return res.redirect('/users/login');
    }
    Users.findOne({email: email}, (err, user)=>{
      // console.log(err, user);
      if (err) return res.status(500).next(err);
      if(!user) return res.status(400).redirect('/users/login');
      console.log(user);
      if(!user.validatePassword (password)) return res.status(400).redirect('/users/login')
      req.session.userId = user._id;
      res.status(200).send("session created");
    })
  };

exports.userForm = function (req, res) {
    res.render('userform')
};

exports.userCreate =  function (req, res, next) {
    Users.create(req.body, (err=>{
      if(err) return next(err);
      res.redirect('/users');
    }))
  };

exports.userDelete =  (req, res, next)=>{
    var id = req.params.id;
    Users.findByIdAndDelete(id, (err)=>{
        if(err) return next(err);
        res.redirect('/users')
    })
 };