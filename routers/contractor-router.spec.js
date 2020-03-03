const supertest = require('supertest');
const router = require('./contractor-router');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

afterAll(async () => {
  await db.destroy();
});

// GET - /api/contractors
test("get all contractors", async () => {
  const res = await supertest(server.use(router))
    .get("/api/contractors")
  expect(res.status).toBe(400)
  expect(res.type).toBe("application/json")
})

// GET - /api/contractors/:id
test("get a single contractor", async () => {
  const res = await supertest(server.use(router))
    .get("/api/contractor/1")
  expect(res.status).toBe(404)
  expect(res.type).toBe("text/html")
})