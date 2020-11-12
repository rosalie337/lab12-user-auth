require('dotenv').config();

const { execSync } = require('child_process');


const fakeRequest = require('supertest');
const app = require('../lib/app');
const client = require('../lib/client');

describe('app routes', () => {
  describe('routes', () => {
    let token;
  
    beforeAll(async done => {
      execSync('npm run setup-db');
  
      client.connect();
  
      const signInData = await fakeRequest(app)
        .post('/auth/signup')
        .send({
          email: 'jon@user.com',
          password: '1234'
        });
      
      token = signInData.body.token;
  
      return done();
    });
  
    afterAll(done => {
      return client.end(done);
    });

    test('returns user\'s tasks', async() => {

      const expectation = [
        {
          'id': 4,
          'todo': 'water plants',
          'completed': false,
          'owner_id': 2
        }
      ];
      
      const data = await fakeRequest(app)
        .post('/api/todos')
        .send(expectation[0])
        .set('Authorization', token)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('gets user\'s tasks', async() => {

      const expectation = [
        {
          'id': 4,
          'todo': 'water plants',
          'completed': false,
          'owner_id': 2
        }
      ];
      
      const data = await fakeRequest(app)
        .get('/api/todos')
        .send(expectation[0])
        .set('Authorization', token)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('updates user\'s tasks', async() => {

      const expectation = [
        {
          'id': 4,
          'todo': 'water plants',
          'completed': true,
          'owner_id': 2
        }
      ];
      
      const data = await fakeRequest(app)
        .put('/api/todos/4')
        .send(expectation[0])
        .set('Authorization', token)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });
  });
});
