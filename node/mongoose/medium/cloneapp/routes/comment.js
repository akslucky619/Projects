var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Users = mongoose.model('Users');

var Blog = mongoose.model('Blog');
var CommentPost = mongoose.model('CommentPost');

router.post('/:id/comments', Users, (req, res)=>{
    var newComment = new CommentPost(req.body);
    var id = req.params.id;
    newComment.save(err =>{
        Blog.findByIdAndUpdate(id, {
            $push: {
                Comments: newComment.id
            }
        })
    })
})