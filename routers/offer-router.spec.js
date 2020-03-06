const supertest = require('supertest');
const router = require('./offer-router');
const server = require('../api/server');

// GET - /api/offers/contractor/:id
test("get all offers for a contractor", async () => {
  const res = await supertest(server.use(router))
    .get("/contractor/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// POST - /api/offers
test("add an offer", async () => {
  const res = await supertest(server.use(router))
    .post("/")
    .send({
      username: "tiffany88",
      first_name: "Tiffany",
      last_name: "Lynn",
      offer: "This is my offer",
      max_child_count: "3",
      location: "Magic Kingdom",
      time: "2pm",
      contractor_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// PUT - /api/offers/:id
test("update an offer", async () => {
  const res = await supertest(server.use(router))
    .put("/2")
    .send({
      username: "tiffany88",
      first_name: "Tiffany",
      last_name: "Lynn",
      offer: "This is my offer updated",
      max_child_count: "3",
      location: "Magic Kingdom",
      time: "2pm",
      contractor_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// DELETE - /api/offers/:id
test("remove an offer", async () => {
  const res = await supertest(server.use(router))
    .delete("/2")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})
