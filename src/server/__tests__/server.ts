import * as supertest from 'supertest';
import server from '../server';

import {Server} from 'http';

describe('Server', () => {
  let serverInstance: Server;
  beforeAll(() => serverInstance = server(true));
  afterAll(() => serverInstance.close());

  test('Status 200 On Index', async () => {
    return supertest(serverInstance)
      .get('/')
      .expect(200);
  });

  test('Status 404 On Undefined Route', async () => {
    return supertest(serverInstance)
      .get('/notDefined')
      .expect(404);
  });

  test('Serve Static Files', async () => {
    return supertest(serverInstance)
      .get('/static/index.html')
      .expect(200);
  });
});

