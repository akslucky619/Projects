var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Author = require('../models/author');

router.get('/', function(req, res) {
    Author.find({}).populate('books').exec((err, authorlist) => {
        if(err) return next(err);
        res.render('authordisplay', {allauthors: authorlist})
    })
  });

// get author listing
// router.get('/', function (req,res,next) {
    
//     Author.find({}, (err, authorlist)=>{
//         if(err) return next(err);
//         res.render()
//     })
// })

router.get('/new', function (req, res) {
    res.render('authorsform');
})

router.post('/new', function (req, res, next) {
    Author.create(req.body, (err,result)=>{
        if(err) return next(err);
        res.redirect('/authors');
    })
});

router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    Author.findById(id, (err, author) => {
        if(err) return next(err);
        res.render('authorDetails', {author: author}); 
    })
})

router.get('/:id/edit', (req, res, next) => {
    Author.findById(req.params.id, (err, author) => {
        if(err) return next(err);
        res.render('editform', {author: author})
    })
})

router.post('/:id/update', (req, res, next) => {
    var id = req.params.id;
    Author.findByIdAndUpdate(id, req.body, {new: true}, (err, author) => {
        if(err) return next(err);
        res.redirect("/authors/" + author._id)
    })
})

router.get('/:id/delete', (req, res, next)=>{
    var id = req.params.id;
    Author.findByIdAndDelete(id, (err)=>{
        if(err) return next(err);
        res.redirect('/authors')
    })
})

module.exports = router;
