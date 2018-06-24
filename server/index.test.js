const { app, server } = require ('./index.js');
const supertest = require('supertest');

test('hello world', ()=>{
  supertest(app)
  .get('/')
  .expect(200)
  .set('Accept', 'text/html')
  .then((res)=>{
    expect(res.text).toEqual('Hello world!');
  })
})

server.close();
