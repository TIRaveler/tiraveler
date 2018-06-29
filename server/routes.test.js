import express from 'express';
import supertest from 'supertest';
import routes from './routes';

jest.mock('./controllers/dbControllers');
jest.mock('./controllers/eventControllers');
jest.mock('./controllers/photoControllers');
jest.mock('./controllers/userControllers');


describe('Server API routes', () => {
  let app;
  let server;

  beforeAll(() => {
    app = express();
    app.use('/', routes);
    server = app.listen(8000);
  });

  test('can login user', () => {
    supertest(app)
      .post('/user/login')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text).toEqual('Success'));
  });

  test('can logout user', () => {
    supertest(app)
      .post('/user/logout')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text).toEqual('Success'));
  });

  test('can register user', () => {
    supertest(app)
      .post('/user/register')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text).toEqual('Success'));
  });

  test('can search photos', () => {
    supertest(app)
      .post('/photos/search')
      .expect(200)
      .set('Accept', 'application/json')
      .then(res => expect(Array.isArray(res.body)).toEqual(true));
  });

  test('can search events', () => {
    supertest(app)
      .post('/events/search')
      .expect(200)
      .set('Accept', 'application/json')
      .then(res => expect(Array.isArray(res.body)).toEqual(true));
  });

  test('can save to itinerary to database', () => {
    supertest(app)
      .post('/itinerary/save')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text).toEqual('Success'));
  });

  afterAll(() => { server.close(); });
});
