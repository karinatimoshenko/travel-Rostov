var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Главная'});
});

router.get('/showplace', function(req, res, next) {
  res.render('showplace', { title: 'Достопримечательности'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'О Ростовской области'});
});


module.exports = router;
