var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    content: String,
    tags: [String],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    Comments: [{type: Schema.Types.ObjectId, ref:'CommentPost'}],
    author: {type: Schema.Types.ObjectId, ref:'Users', required: true}
}, {timestamps: true});

var Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;
