var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Главная'});
});

router.get('/showplaces', function(req, res, next) {
  res.render('showplaces', { title: 'Достопримечательности'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'О Ростовской области'});
});

router.get('/special-route', function(req, res, next) {
  res.render('special-route', { title: 'Индивидуальный маршрут'});
});

router.get('/showplace-details', function(req, res, next) {
  res.render('showplace-details', { title: 'Достопримечательность'});/* title поменять на названеи достопримечательности. */
});

router.get('/routes', function(req, res, next) {
  res.render('routes', { title: 'Маршруты'});
});

router.get('/route-details', function(req, res, next) {
  res.render('route-details', { title: 'Маршрут'});/* title поменять на названеи маршрута. */
});

module.exports = router;
