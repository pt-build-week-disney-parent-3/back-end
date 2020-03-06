const supertest = require('supertest');
const router = require('./answer-router');
const server = require('../api/server');

// GET - /api/answers/question/:id
test("get all answers to a question", async () => {
    const res = await supertest(server.use(router)).get("/question/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// GET - /api/answers/:id
test("get single answer", async () => {
  const res = await supertest(server.use(router))
    .get("/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// POST - /api/answers
test("add answer", async () => {
  const res = await supertest(server.use(router))
    .post("/")
    .send({
      username: "Tiffany88",
      first_name: "Tiffany",
      last_name: "Simionescu",
      answer: "My test answer",
      question_id: 1,
      contractor_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// PUT - /api/answers/:id
test("update answer", async () => {
  const res = await supertest(server.use(router))
    .put("/2")
    .send({
      username: "Tiffany88",
      first_name: "Tiffany",
      last_name: "Simionescu",
      answer: "My test answer updated",
      question_id: 1,
      contractor_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// DELETE - /api/answers/:id
test("remove answer", async () => {
  const res = await supertest(server.use(router))
    .delete("/2")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
}) 