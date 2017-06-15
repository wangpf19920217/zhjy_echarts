var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('project', { title: '中海用户体验数据可视化展示',proList:['安居决策','权力关系','运行监控']}).next();
});


module.exports = router;
