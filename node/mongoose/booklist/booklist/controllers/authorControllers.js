var Author = require('../models/author');

exports.authorDisplay = function(req, res) {
    Author.find({}).populate('books').exec((err, authorlist) => {
        if(err) return next(err);
        res.render('authordisplay', {allauthors: authorlist})
    })
  };

exports.authorForm = function (req, res) {
    res.render('authorsform');
};

exports.authorCreate = function (req, res, next) {
    Author.create(req.body, (err,result)=>{
        if(err) return next(err);
        res.redirect('/authors');
    })
};

exports.authorDetails = (req, res, next) => {
    var id = req.params.id;
    Author.findById(id, (err, author) => {
        if(err) return next(err);
        res.render('authorDetails', {author: author}); 
    })
};

exports.authorEdit = (req, res, next) => {
    Author.findById(req.params.id, (err, author) => {
        if(err) return next(err);
        res.render('editform', {author: author})
    })
};

exports.authorUpdate =  (req, res, next) => {
    var id = req.params.id;
    Author.findByIdAndUpdate(id, req.body, {new: true}, (err, author) => {
        if(err) return next(err);
        res.redirect("/authors/" + author._id)
    })
};

exports.authorDelete = (req, res, next)=>{
    var id = req.params.id;
    Author.findByIdAndDelete(id, (err)=>{
        if(err) return next(err);
        res.redirect('/authors')
    })
};

