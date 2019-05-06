var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/new', function (req, res, next) {
  res.render('form');
})

module.exports = router;
