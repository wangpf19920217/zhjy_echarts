var express = require('express');
var router = express.Router();


router.get('/table', function(req, res, next) {
  res.render('./zhexian', { title: '信息图展示',
  	gisList:['系列(1)','系列(2)','系列(3)']
  }).next();
});


module.exports = router;
