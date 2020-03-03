const supertest = require('supertest');
const router = require('./answer-router');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

afterAll(async () => {
  await db.destroy();
});

// GET - /api/answers/question/:id
test("get all answers to a question", async () => {
  const res = await supertest(server.use(router))
    .get("/api/answers/question/1")
  expect(res.status).toBe(400)
  expect(res.type).toBe("application/json")
})

// GET - /api/answers/:id
test("get single answer", async () => {
  const res = await supertest(server.use(router))
    .get("/api/answers/1")
  expect(res.status).toBe(400)
  expect(res.type).toBe("application/json")
})
