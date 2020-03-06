const supertest = require('supertest');
const router = require('./offer-comment-router');
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

// GET - /api/offercomments/offer/:id 
test("get all offer comments for an offer", async () => {
  const res = await supertest(server.use(router))
    .get("/api/offercomments/offer/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})