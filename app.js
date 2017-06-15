var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');//第三方中间件，网页图标中间件，域名前的图标
var logger = require('morgan');//在控制台中输出request请求的信息，比如通过get方法加载css样式
var cookieParser = require('cookie-parser');//解析cooike中间件
var bodyParser = require('body-parser');//解析请求体中间件

var index = require('./routes/index');
var users = require('./routes/users');
var table = require('./routes/table');
var gis = require('./routes/gis');
var demo = require('./routes/demo');
var project = require('./routes/project');
var about = require('./routes/about');

//table目录
var zhexian = require('./routes/table/zhexian');

var app = express();

// 视图引擎设置
app.set('views', path.join(__dirname, 'views')); //模板文件的目录，__dirname当前文件所在路径
app.set('views/table', path.join(__dirname, 'views/table')); //模板文件的目录，__dirname当前文件所在路径
app.set('view engine', 'ejs');	//设置渲染引擎

console.log(__dirname)
// 在放置你的图标/公共注释
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//静态文件处理中间件，模板的css、js文件路径命会拼接到public后


app.use('/', index);
// /为进入默认首页
//配置路由规则，顺序执行，率先执行的规则有效，后面的会被忽略，使用next()方法可以使后续的路由规则得到执行
app.use('/users', users);
app.use('/table', table);
app.use('/gis', gis);
// 匹配 /random.text 路径的请求
app.use('/demo', demo);
app.use('/project', project);
app.use('/about', about);
//table文件
app.use('./table/zhexian',zhexian);



// 捕获404和转发到错误处理程序
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  
  next(err);
});

// 错误处理程序
app.use(function(err, req, res, next) {
  // set locals, 只提供发展中的错误
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染错误页面
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
