var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema
({
    title: {type: String,
            required: true,
    },
    description: String,
    pages: Number,
    tags: [String], // makes it an array of strings. can also do [Number]
    // created: {type: Date,
    //           default: new Date(),
    // },
    // published: {type: Boolean,
    //             default: false, // value will be 'false' if nothing is provided here
    // },
    // timestamp: {timestamps: true}, // adds createdat and updatedat fields
});

// Model for the bookSchema. A Model is like an entire collection. El nombre tiene que ser singular.

var Book = mongoose.model('Book', bookSchema)

module.exports = Book;

// we kunnen ook dit doen: module.exports = mongoose.Model('Book', bookSchema)

// form to take the details on books/new
// handle a post request on /books action /books, method="POST"
// var book = req.body
// wherever the book creation is being handled in the routes folder, we need to first require the book model
// relative path... then, Book.create(what to insert, ie req.body, then, (err, book))

// get request on form/new... 

// res.redirect('/')