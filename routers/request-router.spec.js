const supertest = require('supertest');
const router = require('./request-router');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

afterAll(async () => {
  await db.destroy();
});

// GET - /api/requests/parent/:id
test("get all requests for a single parent", async () => {
  const res = await supertest(server.use(router))
    .get("/api/requests/parent/1")
  expect(res.status).toBe(400)
  expect(res.type).toBe("application/json")
})