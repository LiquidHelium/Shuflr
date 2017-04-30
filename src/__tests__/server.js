import server from '../server';
import supertest from 'supertest';

describe('Server', () => {
  let serverInstance;
  beforeAll(() => serverInstance = server());
  afterAll(async () => await serverInstance.close());

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
      .get('/static/script.js')
      .expect(200);
  });
});

