// @flow
import Koa from 'koa';
import R from 'ramda';

const app = new Koa();

type SomeType = {
  title: string;
  value: string;
}

const x: SomeType = {
  title: 'hi',
  value: 'hi'
}

R.first(22);

app.use(ctx => {
  ctx.body = 'Hello World';
});

console.log('Server Started');
app.listen(3000);

