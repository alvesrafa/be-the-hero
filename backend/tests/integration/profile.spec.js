const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('Perfil da ONG', () => {

  it('Deverá acessar perfil da ONG', async () => {
    const response = await request(app)
    .get('/profile').set('Authorization', '219cfa3a')

    expect(response.body);
  })
})
