import Koa from 'koa';
import Router from 'koa-router';

export default () => {
  const port = 3000;

  const app = new Koa();
  const router = new Router();

  router.get('/', async (ctx) => {
    ctx.body = 'Hello World';
  });

  app.use(router.routes());
  app.use(router.allowedMethods());

  return app.listen(port, () => {
    console.log('App started on port ' + port);
  });
};

