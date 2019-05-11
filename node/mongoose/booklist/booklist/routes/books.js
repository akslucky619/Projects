var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Book = require('../models/book')
var Author = require("../models/author")
var session = require('express-session')
var bookController = require('../controllers/bookControllers')

/* GET users listing. */
router.get('/', bookController.bookdisplay)

router.get('/new', bookController.bookForm)

router.post('/new', bookController.bookCreate)

router.get('/:id', bookController.bookDetails)



router.get('/:id/edit', bookController.bookEdit)


router.post('/:id/update', bookController.bookUpdate)

router.get('/:id/delete', bookController.bookDelete)

module.exports = router;

// Book.find()
