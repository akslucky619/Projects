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
}, {timestamps: true});

var Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;
