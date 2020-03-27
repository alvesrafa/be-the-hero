const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('Iniciando sessão', () => {
  beforeEach(async ()=> {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })
  afterAll(async ()=>{
    await connection.destroy()
  })
  it('Deve iniciar uma nova sessão', async () => {
    const response = await request(app)
    .post('/sessions')
    .send({
      id: "6b7b4408",
    })
    expect(response.body);
  })
})