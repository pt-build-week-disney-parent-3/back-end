const authRouter = require('./auth-router');
const supertest = require('supertest');

describe("Auth Router Test - Parent login", () => {

  it('token is being passed', async () => {
    beforeAll(done => {
      supertest(authRouter)
        .post('/api/auth/login/parent')
        .send({
          username: "tiffany87",
          password: "123456"
        })
        .end((err, res) => {
          token = res.body.token,
          done();
        })
    })
  })
})

describe("Auth Router Test - Contractor login", () => {

  it('token is being passed', async () => {
    beforeAll(done => {
      supertest(authRouter)
        .post('/api/auth/login/contractor')
        .send({
          username: "tiffany88",
          password: "123456"
        })
        .end((err, res) => {
          token = res.body.token,
          done();
        })
    })
  })
})

describe("Auth Router Test - Parent register", () => {

  it('token is being passed', async () => {
    beforeAll(done => {
      supertest(authRouter)
        .post('/api/auth/register/parent')
        .send({
          username: "tiffany89",
          password: "123456"
        })
        .end((err, res) => {
          token = res.body.token,
          done();
        })
    })
  })
})

describe("Auth Router Test - Contractor register", () => {

  it('token is being passed', async () => {
    beforeAll(done => {
      supertest(authRouter)
        .post('/api/auth/register/contractor')
        .send({
          username: "tiffany90",
          password: "123456"
        })
        .end((err, res) => {
          token = res.body.token,
          done();
        })
    })
  })
})