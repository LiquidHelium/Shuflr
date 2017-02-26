// @flow

const Koa = require('koa');

const app = new Koa();

const x: string = 22;
app.use(ctx => {
  ctx.body = 'Hello World';
});

console.log('Server Started');
app.listen(3000);

