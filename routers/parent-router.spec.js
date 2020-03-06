const supertest = require('supertest');
const router = require('./parent-router');
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

// GET - /api/parents
test("get all parents", async () => {
  const res = await supertest(server.use(router))
    .get("/api/parents")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// GET - /api/parents/:id
test("get a single parents", async () => {
  const res = await supertest(server.use(router))
    .get("/api/parents/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})