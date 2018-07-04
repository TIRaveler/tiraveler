import supertest from 'supertest';
import app from './server';

jest.mock('../db/index');
jest.mock('./routes.js');

describe('Server sends website pages', () => {
  test('returns index for index page', () => {
    supertest(app)
      .get('/')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text.includes('<html>')).toEqual(true));
  });

  test('returns index for search', () => {
    supertest(app)
      .get('/search')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text.includes('<html>')).toEqual(true));
  });

  test('returns index for time', () => {
    supertest(app)
      .get('/time')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text.includes('<html>')).toEqual(true));
  });

  test('returns index for photos', () => {
    supertest(app)
      .get('/photos')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text.includes('<html>')).toEqual(true));
  });

  test('returns index for events', () => {
    supertest(app)
      .get('/events')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text.includes('<html>')).toEqual(true));
  });

  test('returns index for review', () => {
    supertest(app)
      .get('/review')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text.includes('<html>')).toEqual(true));
  });

  test('returns index for finalized', () => {
    supertest(app)
      .get('/finalized')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text.includes('<html>')).toEqual(true));
  });

  test('returns index for my itineraries', () => {
    supertest(app)
      .get('/myItineraries')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text.includes('<html>')).toEqual(true));
  });
});

describe('Server handles API calls', () => {
  test('successful login', () => {
    supertest(app)
      .post('/user/login')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text).toEqual('Success'));
  });

  test('successful logout', () => {
    supertest(app)
      .post('/user/logout')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text).toEqual('Success'));
  });

  test('successful register', () => {
    supertest(app)
      .post('/user/register')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text).toEqual('Success'));
  });

  test('successful photo search', () => {
    supertest(app)
      .post('/photos/search')
      .expect(200)
      .set('Accept', 'application/json')
      .then(res => expect(res.body).toBeInstanceOf(Array));
  });

  test('successful events search', () => {
    supertest(app)
      .post('/events/search')
      .expect(200)
      .set('Accept', 'application/json')
      .then(res => expect(res.body).toBeInstanceOf(Array));
  });

  test('successful itinerary save', () => {
    supertest(app)
      .post('/itinerary/save')
      .expect(200)
      .set('Accept', 'text/html')
      .then(res => expect(res.text).toEqual('Success'));
  });
});
