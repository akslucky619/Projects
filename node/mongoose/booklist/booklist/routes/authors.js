var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Author = require('../models/author');
var authorController = require('../controllers/authorControllers');

router.get('/', authorController.authorDisplay);

router.get('/new', authorController.authorForm);

router.post('/new', authorController.authorCreate);

router.get('/:id', authorController.authorDetails);

router.get('/:id/edit', authorController.authorEdit);

router.post('/:id/update',authorController.authorUpdate);

router.get('/:id/delete', authorController.authorDelete);

module.exports = router;
