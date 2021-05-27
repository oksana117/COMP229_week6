var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', {title: 'About'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', {title: 'Projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', {title: 'Services'});
});

/* GET contact me page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'});
});

module.exports = router;
