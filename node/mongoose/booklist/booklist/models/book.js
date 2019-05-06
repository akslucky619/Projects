var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema
({
    title: {type: String,
            required: true,
    },
    description: String,
    pages: Number,
    tags: [String],
    author: {type: Schema.Types.ObjectId,
             required: true,
             ref: 'Author'
    },
});


var Book = mongoose.model('Book', bookSchema)

module.exports = Book;