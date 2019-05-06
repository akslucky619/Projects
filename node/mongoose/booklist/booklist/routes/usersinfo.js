var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/userdata');


router.get('/new', function (req, res) {
    res.render('userform')
})

module.exports = router;