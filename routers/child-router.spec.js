const supertest = require('supertest');
const router = require('./child-router');
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

// GET - /api/children/parent/:id
test("get all children from a parent", async () => {
  const res = await supertest(server.use(router))
    .get("/api/children/parent/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})
