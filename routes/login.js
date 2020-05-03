var express = require('express');
var router = express.Router();


// sketchy
// misunderstood

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'sketchy' });
});

module.exports = router;
