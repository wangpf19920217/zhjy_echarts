var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('gis', { title: 'gis地图展示',
  	gisList:['标准地图','迁徙地图','热力地图','密度地图','散点地图']
  }).next();
});


module.exports = router;
