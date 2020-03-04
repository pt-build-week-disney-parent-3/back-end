const supertest = require('supertest');
const router = require('./request-comment-router');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

afterAll(async () => {
  await db.destroy();
});

// GET - /api/reqcomments/request/:id
test("get all request comments for a single request", async () => {
  const res = await supertest(server.use(router))
    .get("/api/reqcomments/request/1")
  expect(res.status).toBe(400)
  expect(res.type).toBe("application/json")
})