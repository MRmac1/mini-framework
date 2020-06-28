const express = require('../libs/express');
const app = express();

// const router = require('./router')

// 使用中间件
app.use(function(req, res, next) {
  console.log('before middleware', req.url);
  next();
})

// 路由
// app.use('/', router);

app.listen(process.env.PORT || 3000);

