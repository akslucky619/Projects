var mongoose = require('mongoose')
var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');
var authcontroller = require('../controllers/authcontroller')

router.get('/new', authcontroller.isUserLogged, (req, res) =>{
    res.render('blogform')
})

router.post('/new', (req, res, next)=>{
    var tags = req.body.tags.split(',');
    req.body.tags = tags;
    Blog.create(req.body, (err, result) =>{
        if(err) return next(err)
        res.redirect('/')
    })
})

router.get('/:id', (req, res, next)=>{
    var id = req.params.id;
    Blog.findById(id, (err, blog)=>{
        if(err) return next(err);
        res.render('blogdetails', {blog: blog})
    })
})

router.get('/bloguser', (req, res, next)=>{
    if(req.session && req.session.user._id){
        Blog.find({}, (err, userbloglist)=>{
            if(err) return next(err);
            res.render('bloguser', {blogitems: userbloglist})
        })
    }
    else{
        res.render('blogdisplay')
    }
})

router.get('/:id/edit',(req, res, next)=>{
    var id = req.user._id;
    console.log(id)
    
    Blog.findById(req.params.id, (err, blog)=>{
        if(err) return next(err);
        if(req.user && blog.user.equals(req.user._id)){
        res.render('blogEdit', {blog: blog})
    }
    else{
        res.send('Unauthorized user')
    }
})
})

router.post('/:id/update',(req, res, next)=>{
    var id = req.params.id;
    Blog.findByIdAndUpdate(id, req.body, {new: true}, (err, blog)=>{
        if(err) return next(err);
        res.redirect('/')
    })
})

router.get('/:id/delete',(req, res, next)=>{
    var id = req.params.id;
    Blog.findByIdAndDelete(id, (err, blog)=>{
        if(err) return next(err);
        // if(req.user && blog.user.equals(req.user._id)){
        res.redirect('/')
    // }
    // else{
    //     res.send("Unauthorised user")
    // }
})
})

module.exports = router;