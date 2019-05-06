var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    // Declare all the fields
    title: String,
    author: String,
    pages: Number,
    available: Boolean,
    created_at: {
      type: Date,
      default: new Date()
    },
    tags: [String]
  });

  var Book = mongoose.model('Book', bookSchema);
  module.exports = Book;