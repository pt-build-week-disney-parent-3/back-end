const supertest = require('supertest');
const router = require('./contractor-router');
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

// GET - /api/contractors
test("get all contractors", async () => {
  const res = await supertest(server.use(router))
    .get("/api/contractors")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// GET - /api/contractors/:id
test("get a single contractor", async () => {
  const res = await supertest(server.use(router))
    .get("/api/contractor/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("text/html")
})