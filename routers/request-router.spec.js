const supertest = require('supertest');
const router = require('./request-router');
const server = require('../api/server');

// GET - /api/requests/parent/:id
test("get all requests for a single parent", async () => {
  const res = await supertest(server.use(router))
    .get("/parent/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// POST - /api/requests
test("add a request", async () => {
  const res = await supertest(server.use(router))
    .post("/")
    .send({
      username: "tiffany87",
      first_name: "Tiffany",
      last_name: "Simionescu",
      request: "This is my request",
      child_count: 2,
      location: "Magic Kingdom",
      time: "2pm",
      stroller: false,
      ride: "Spalsh Mountain",
      parent_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// PUT - /api/requests/:id
test("update a request", async () => {
  const res = await supertest(server.use(router))
    .put("/2")
    .send({
      username: "tiffany87",
      first_name: "Tiffany",
      last_name: "Simionescu",
      request: "This is my request updated",
      child_count: 2,
      location: "Magic Kingdom",
      time: "2pm",
      stroller: false,
      ride: "Spalsh Mountain",
      parent_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// DELETE - /api/requests/:id
test("remove a request", async () => {
  const res = await supertest(server.use(router))
    .delete("/2")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})