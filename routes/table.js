var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('table', { title: '中海用户体验数据可视化展示',
  	tableList : ['折线图(3)','柱状图(4)','饼图(3)','散点图(3)','雷达图(3)','箱线图(3)','仪表盘(3)','漏斗图(3)','热力图(3)','关系图(3)','韦恩图(3)','矩形树图(3)','树图(3)','字符云(3)'],
  	tableUrl : ['zhexian','zhuzhuang','sandian','Kxian','bing','leida','hexuan','lidao','map','yibiao','loudou','reli','shijian','weien','juxing','shu','zifu']
  });
});

module.exports = router;