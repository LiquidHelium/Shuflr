import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Static from 'koa-static';
import * as Mount from 'koa-mount';
import * as bluebird from 'bluebird';
import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';

import { getVideoInfo } from './apis/Youtube';


const readFile: any = bluebird.promisify(fs.readFile);

export default (quiet: boolean) => {
  const port = process.env.PORT || 3000;

  const app = new Koa();
  const router = new Router();

  router.get('/', async (ctx) => {
    const templatePath = path.join(__dirname, 'templates', 'index.ejs');
    const template = await readFile(templatePath, 'utf-8');
    const html = ejs.render(template);
    ctx.body = html;
  });

  router.get('/youtube/:id', async (ctx) => {
    try {
      const info = await getVideoInfo(ctx.params.id);
      ctx.body = info;
    } catch (err) {
      ctx.status = 500;
      ctx.body = err.message;
    }
  });

  const staticPath = path.join(__dirname, '..', 'static');
  const staticServer = Static(staticPath);
  app.use(Mount('/static', staticServer));

  app.use(router.routes());
  app.use(router.allowedMethods());

  return app.listen(port, () => {
    if (!quiet) {
      console.log(`App started on port ${port}`);
    }
  });
};

