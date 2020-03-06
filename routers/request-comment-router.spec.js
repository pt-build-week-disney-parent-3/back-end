const supertest = require('supertest');
const router = require('./request-comment-router');
const server = require('../api/server');

// GET - /api/reqcomments/request/:id
test("get all request comments for a single request", async () => {
  const res = await supertest(server.use(router))
    .get("/request/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// POST - /api/reqcomments
test("add a request comment", async () => {
  const res = await supertest(server.use(router))
    .post("/")
    .send({
      username: "tiffany88",
      first_name: "Tiffany",
      last_name: "Lynn",
      request_comment: "This is my request comment",
      request_id: 1,
      parent_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// PUT - /api/reqcomments/:id
test("update a request comment", async () => {
  const res = await supertest(server.use(router))
    .put("/2")
    .send({
      username: "tiffany88",
      first_name: "Tiffany",
      last_name: "Lynn",
      request_comment: "This is my request comment updated",
      request_id: 1,
      parent_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// DELETE - /api/reqcomments/:id
test("remove a request comment", async () => {
  const res = await supertest(server.use(router))
    .delete("/2")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})