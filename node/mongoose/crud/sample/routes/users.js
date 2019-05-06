var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  res.json(req.body);
});

router.get('/:un', function(req, res, next) {
  
  res.json({username: req.params.un});
});

module.exports = router;
