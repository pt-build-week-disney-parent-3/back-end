const supertest = require('supertest');
const router = require('./question-router');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
})

afterEach(async () => {
  await db.destroy();
});

// GET - /api/questions
test("get all questions", async () => {
  const res = await supertest(server.use(router))
    .get("/api/questions")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// GET - /api/questions/parent/:id
test("get all questions for a single parent", async () => {
  const res = await supertest(server.use(router))
    .get("/api/questions/parent/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})