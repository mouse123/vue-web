const app = require('koa')()
  , koa = require('koa-router')()
  , json = require('koa-json')
  , logger = require('koa-logger')
  , api = require('./server/routes/api.js'); // 引入各种依赖

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());	

app.use(function* (next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms); // 显示执行的时间
});

app.on('error', function(err, ctx){
  console.log('server error', err);
});

koa.use('/api',api.routes());

app.use(koa.routes());

app.listen(8889,() => {
  console.log('Koa is listening in 8889');
});

module.exports = app;