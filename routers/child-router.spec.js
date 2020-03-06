const supertest = require('supertest');
const router = require('./child-router');
const server = require('../api/server');

// GET - /api/children/parent/:id
test("get all children from a parent", async () => {
  const res = await supertest(server.use(router))
    .get("/parent/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// POST - /api/children
test("add child", async () => {
  const res = await supertest(server.use(router))
    .post("/")
    .send({
      first_name: "Sophie",
      last_name: "Simionescu",
      dob: "July",
      allergies: "none",
      medical_conditions: "none",
      special_instructions: "none",
      parent_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// PUT - /api/children/:id
test("update child", async () => {
  const res = await supertest(server.use(router))
    .put("/2")
    .send({
      first_name: "Sophie",
      last_name: "Simionescu",
      dob: "July",
      allergies: "Updated Allergies",
      medical_conditions: "none",
      special_instructions: "none",
      parent_id: 1
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})

// DELETE - /api/children/:id
test("remove child", async () => {
  const res = await supertest(server.use(router))
    .delete("/2")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})