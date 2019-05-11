var mongoose = require('mongoose')
var express = require('express');
var router = express.Router();
var Blog = require('../models/blog')
// var blogscontroller = require('../controllers/blogscontroller')

router.get('/new', (req, res) =>{
    res.render('blogform')
})

// router.post('/new', (req, res, next)=>{
//     var tags = req.body.tags.split(',');
//     req.body.tags = tags;
//     Blog.create(req.body, (err) =>{
//         if(err) return next(err)
//         res.redirect('/blogs')
//     })
// })