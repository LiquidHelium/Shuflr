import { Connection } from 'typeorm/connection/Connection';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Static from 'koa-static';
import * as BodyParser from 'koa-bodyparser';
import * as Mount from 'koa-mount';
import * as bluebird from 'bluebird';
import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import * as shortid from 'shortid';

import { createConnection } from 'typeorm';

import { getVideoInfo } from './apis/Youtube';
import Playlist from './models/playlist';


const readFile: any = bluebird.promisify(fs.readFile);

const server = (connection: Connection, quiet: boolean) => {
  const port = process.env.PORT || 3000;

  const app = new Koa();
  const router = new Router();

  router.get('/', async (ctx) => {
    const templatePath = path.join(__dirname, 'templates', 'index.ejs');
    const template = await readFile(templatePath, 'utf-8');
    const html = ejs.render(template);
    ctx.body = html;
  });

  router.get('/:playlistID', async (ctx) => {
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

  router.get('/playlist/:id', async (ctx) => {
    try {
      const playlist =
        await connection.getRepository(Playlist).findOne({ shortcode: ctx.params.id });
      
      ctx.body = playlist;
    } catch (err) {
      ctx.status = 500;
      ctx.body = err.message;
    }
  });


  router.post('/playlist', async (ctx) => {
    try {
      const videos = ctx.request.body.videos;
      const shortcode = shortid.generate();

      videos.forEach((video: any) => {
        if (video.length > 15) {
          throw new Error('invalid youtube id');
        }
        if (typeof video !== 'string') {
          throw new Error('invalid youtube id');
        }
      });

      await connection.getRepository(Playlist).save({ shortcode, videos: JSON.stringify(videos) });
      
      ctx.body = { shortcode };
    } catch (err) {
      ctx.status = 500;
      ctx.body = err.message;
    }
  });

  const staticPath = path.join(__dirname, '..', 'static');
  const staticServer = Static(staticPath);
  app.use(Mount('/static', staticServer));
  app.use(BodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());

  return app.listen(port, () => {
    if (!quiet) {
      console.log(`App started on port ${port}`);
    }
  });
};

export default async (quiet: boolean) => {
  try {
    const connection = await createConnection({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Playlist],
      synchronize: true,
      extra: {
        ssl: true,
      },
    });

    server(connection, quiet);
  } catch (err) {
    console.log(err);
  }
};
