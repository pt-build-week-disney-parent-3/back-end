const authRouter = require('./auth-router');
const supertest = require('supertest');
const db = require('../database/dbConfig');

let token;

describe("Auth Router Test - Parent login", () => {

  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
  })
  
  afterEach(async () => {
    await db.destroy();
  });

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
  
  beforeEach(async () => {
    await db.migraqte.rollback();
    await db.migrate.latest();
    await db.seed.run();
  })
  
  afterEach(async () => {
    await db.destroy();
  });

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
  
  beforeEach(async () => {
    await db.migraqte.rollback();
    await db.migrate.latest();
    await db.seed.run();
  })
  
  afterEach(async () => {
    await db.destroy();
  });

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
  
  beforeEach(async () => {
    await db.migraqte.rollback();
    await db.migrate.latest();
    await db.seed.run();
  })
  
  afterEach(async () => {
    await db.destroy();
  });

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