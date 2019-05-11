var Book = require('../models/book');
var Author = require("../models/author");

exports.bookdisplay = function(req, res, next) {

    if(req.session && req.session.userId) {
      Book.find({}).populate('author').exec((err, fullbooklist) => {
          if(err) return next(err);
          res.render('booksdisplay', {bookitems: fullbooklist})
      })
    }  else {
        res.redirect('/users/login');
    }   
  };

exports.bookForm = function(req, res, next) {
    
  Author.find({}).populate('author').exec((err, authorlist) => {
      if(err) return next(err);
      res.render('booksform', {authoritems: authorlist})
  })
};

exports.bookCreate = function(req, res, next) {
  console.log(req.body);
  var tags = req.body.tags.split(',');
  req.body.tags = tags;
  Book.create(req.body, (err, result) => {
      if (err) return next(err);
      res.redirect('/books');
  })
};

exports.bookDetails = (req, res, next) => {
  var id = req.params.id;
  Book.findById(id, (err, book) => {
      if(err) return next(err);
      res.render('details', {book: book}); 
  })
};

exports.bookEdit = (req, res, next) => {
  Book.findById(req.params.id, (err, book) => {
      if(err) return next(err);
      res.render('editForm', {book: book})
  })
};

exports.bookUpdate = (req, res, next) => {
  var id = req.params.id;
  Book.findByIdAndUpdate(id, req.body, {new: true}, (err, book) => {
      if(err) return next(err);
      res.redirect("/books/" + book._id)
  })
};

exports.bookDelete = (req, res, next)=>{
  var id = req.params.id;
  Book.findByIdAndDelete(id, (err)=>{
      if(err) return next(err);
      res.redirect('/books')
  })
};