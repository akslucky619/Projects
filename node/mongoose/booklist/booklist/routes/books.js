var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Book = require('../models/book')
var Author = require("../models/author")

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    Book.find({}).populate('author').exec((err, fullbooklist) => {
        if(err) return next(err);
        res.render('booksdisplay', {bookitems: fullbooklist})
    })
});

router.get('/new', function(req, res, next) {
    
    Author.find({}).populate('author').exec((err, authorlist) => {
        if(err) return next(err);
        res.render('booksform', {authoritems: authorlist})
    })
});

// router.get('/new', function(req, res) {
//     res.render('booksform');
//   });

router.post('/new', function(req, res, next) {
  console.log(req.body);
  var tags = req.body.tags.split(',');
  req.body.tags = tags;
  Book.create(req.body, (err, result) => {
      if (err) return next(err);
      res.redirect('/books');
  })
});

router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    Book.findById(id, (err, book) => {
        if(err) return next(err);
        res.render('details', {book: book}); 
    })
})



router.get('/:id/edit', (req, res, next) => {
    Book.findById(req.params.id, (err, book) => {
        if(err) return next(err);
        res.render('editForm', {book: book})
    })
})


router.post('/:id/update', (req, res, next) => {
    var id = req.params.id;
    Book.findByIdAndUpdate(id, req.body, {new: true}, (err, book) => {
        if(err) return next(err);
        res.redirect("/books/" + book._id)
    })
})

router.get('/:id/delete', (req, res, next)=>{
    var id = req.params.id;
    Book.findByIdAndDelete(id, (err)=>{
        if(err) return next(err);
        res.redirect('/books')
    })
})

module.exports = router;

// Book.find()
