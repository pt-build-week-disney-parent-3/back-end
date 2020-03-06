const supertest = require('supertest');
const router = require('./offer-router');
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

// GET - /api/offers/contractor/:id
test("get all offers for a contractor", async () => {
  const res = await supertest(server.use(router))
    .get("/api/offers/contractor/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})