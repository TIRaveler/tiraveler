import supertest from 'supertest';
import { app, server } from './index';

jest.mock('../db/index');

test('returns index for index page', () => {
  supertest(app)
    .get('/')
    .expect(200)
    .set('Accept', 'text/html')
    .then((res) => {
      expect(res.text.includes('<html>')).toEqual(true);
    });
});

test('returns index for login', () => {
  supertest(app)
    .get('/login')
    .expect(200)
    .set('Accept', 'text/html')
    .then((res) => {
      expect(res.text.includes('<html>')).toEqual(true);
    });
});

test('returns index for search', () => {
  supertest(app)
    .get('/search')
    .expect(200)
    .set('Accept', 'text/html')
    .then((res) => {
      expect(res.text.includes('<html>')).toEqual(true);
    });
});

test('returns index for time', () => {
  supertest(app)
    .get('/time')
    .expect(200)
    .set('Accept', 'text/html')
    .then((res) => {
      expect(res.text.includes('<html>')).toEqual(true);
    });
});

test('returns index for photos', () => {
  supertest(app)
    .get('/photos')
    .expect(200)
    .set('Accept', 'text/html')
    .then((res) => {
      expect(res.text.includes('<html>')).toEqual(true);
    });
});

test('returns index for events', () => {
  supertest(app)
    .get('/events')
    .expect(200)
    .set('Accept', 'text/html')
    .then((res) => {
      expect(res.text.includes('<html>')).toEqual(true);
    });
});

test('returns index for review', () => {
  supertest(app)
    .get('/review')
    .expect(200)
    .set('Accept', 'text/html')
    .then((res) => {
      expect(res.text.includes('<html>')).toEqual(true);
    });
});

test('returns index for finalized', () => {
  supertest(app)
    .get('/finalized')
    .expect(200)
    .set('Accept', 'text/html')
    .then((res) => {
      expect(res.text.includes('<html>')).toEqual(true);
    });
});

test('returns index for my itineraries', () => {
  supertest(app)
    .get('/myItineraries')
    .expect(200)
    .set('Accept', 'text/html')
    .then((res) => {
      expect(res.text.includes('<html>')).toEqual(true);
    });
});

server.close();
