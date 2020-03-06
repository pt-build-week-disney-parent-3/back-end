const supertest = require('supertest');
const router = require('./answer-router');
const server = require('../api/server');

// GET - /api/answers/question/:id
test("get all answers to a question", async () => {
    const res = await supertest(server.use(router)).get("/question/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// GET - /api/answers/:id
test("get single answer", async () => {
  const res = await supertest(server.use(router))
    .get("/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

