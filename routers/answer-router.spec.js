const supertest = require('supertest');
const router = require('./answer-router');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

let token;

beforeAll((done) => {
  supertest(server)
    .post('/api/auth/login/parent')
    .send({
      username: "tiffany87",
      password: "123456",
    })
    .end((err, response) => {
      token = response.body.token; // save the token!
      done();
    });
});

// GET - /api/answers/question/:id
test("get all answers to a question", async () => {
  // let token = res.body.token;
  const res = await supertest(server.use(router))
    .get("/api/answers/question/1")
    .set("authorization", `${token}`)
  expect(res.status).toBe(403)
  expect(res.type).toBe("application/json")
})

// GET - /api/answers/:id

// POST - /api/answers

// PUT - /api/answers/:id

// DELETE - /api/answers/:id
