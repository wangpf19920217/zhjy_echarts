var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./', { title: '中海用户体验数据可视化展示'}).next();
});


module.exports = router;
