var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Blog = require('../models/blog')

/* GET home page. */
router.get('/', function(req, res) {
  if(req.session && req.session.userId){
    Blog.find({}, (err, fullbloglist) => {
      if(err) return next(err);
      res.render('blogdisplay', {blogitems: fullbloglist});
    }) 
  }
  else{
    res.redirect('/users/login')
  }
});

module.exports = router;
