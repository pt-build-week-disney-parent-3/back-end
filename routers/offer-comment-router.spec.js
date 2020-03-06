const supertest = require('supertest');
const router = require('./offer-comment-router');
const server = require('../api/server');

// GET - /api/offercomments/offer/:id 
test("get all offer comments for an offer", async () => {
  const res = await supertest(server.use(router))
    .get("/offer/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// POST - /api/offercomments
test("add an offer", async () => {
  const res = await supertest(server.use(router))
    .post("/")
    .send({
      username: "tiffany87",
      first_name: "Tiffany",
      last_name: "Simionescu",
      offer_comment: "This is my offer comment",
      offer_id: 1,
      parent_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// PUT - /api/offercomments/:id
test("update an offer", async () => {
  const res = await supertest(server.use(router))
    .put("/2")
    .send({
      username: "tiffany87",
      first_name: "Tiffany",
      last_name: "Simionescu",
      offer_comment: "This is my offer comment updated",
      offer_id: 1,
      parent_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// DELETE - /api/offercomments/:id
test("remove an offer", async () => {
  const res = await supertest(server.use(router))
    .delete("/2")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})
