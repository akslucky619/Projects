var mongoose = require('mongoose');
var Schema =mongoose.Schema;

var CommentSchema = new Schema({
    description: String,
    post: {type: Schema.Types.ObjectId, ref:'Blog'},
    author: {type: Schema.Types.ObjectId, ref:'Users'}
},{timestamps: {createdAt: 'created_at'}});

var CommentPost = mongoose.model('Comment', CommentSchema);

module.exports = CommentPost;

