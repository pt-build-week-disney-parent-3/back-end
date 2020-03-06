const supertest = require('supertest');
const router = require('./question-router');
const server = require('../api/server');

// GET - /api/questions
test("get all questions", async () => {
  const res = await supertest(server.use(router))
    .get("/")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// GET - /api/questions/parent/:id
test("get all questions for a single parent", async () => {
  const res = await supertest(server.use(router))
    .get("/parent/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// POST - /api/questions
test("add a question", async () => {
  const res = await supertest(server.use(router))
    .post("/")
    .send({
      username: "tiffany87",
      first_name: "Tiffany",
      last_name: "Simionescu",
      question: "This is my question",
      parent_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// PUT - /api/questions/:id
test("update a question", async () => {
  const res = await supertest(server.use(router))
    .put("/2")
    .send({
      username: "tiffany87",
      first_name: "Tiffany",
      last_name: "Simionescu",
      question: "This is my question updated",
      parent_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// DELETE - /api/question/:id
test("remove a question", async () => {
  const res = await supertest(server.use(router))
    .delete("/2")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})
