import request from 'supertest'
import server from '../server/app.js'

describe('CRUD', () => {
  test('[GET /users] devuelve 200 status de consulta users', async () => {
    const res = await request(server).get('/users')
    expect(res.status).toBe(200)
  })
})
