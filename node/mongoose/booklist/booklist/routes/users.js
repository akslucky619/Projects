var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/userdata');
var session = require('express-session');
var userController = require('../controllers/userControllers');

router.get('/', userController.userDisplay);

router.get('/login',userController.loginForm);

router.post('/login',userController.loginForm)

router.get('/new', userController.userForm)

router.post('/new',userController.userCreate)

// router.get('/:id',(req, res, next)=>{
//   var id = req.params.id;
//   Users.findById(id,(err, user)=>{
//     if(err) return next(err);
//     res.render('userdetails', {user: user} )
//   })
// })

router.get('/:id/delete', userController.userDelete);

// router.get('')

module.exports = router;ss