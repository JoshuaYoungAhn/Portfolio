
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about/index', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact/index', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/list/index', function(req, res, next) {
  res.render('list', { title: 'Express' });
});



module.exports = router;
