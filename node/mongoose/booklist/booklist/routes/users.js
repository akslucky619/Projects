var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/userdata');

router.get('/', function(req, res) {
  Users.find({}, (err, userlist) => {
      if(err) return next(err);
      res.render('usersdisplay', {allusers: userlist})
  })
});


router.get('/new', function (req, res) {
    res.render('userform')
})

router.post('/new', function (req, res, next) {
  Users.create(req.body, (err=>{
    if(err) return next(err);
    res.redirect('/users');
  }))
})

// router.get('/:id',(req, res, next)=>{
//   var id = req.params.id;
//   Users.findById(id,(err, user)=>{
//     if(err) return next(err);
//     res.render('userdetails', {user: user} )
//   })
// })

router.get('/:id/delete', (req, res, next)=>{
  var id = req.params.id;
  Users.findByIdAndDelete(id, (err)=>{
      if(err) return next(err);
      res.redirect('/users')
  })
})

// router.get('')

module.exports = router;