const supertest = require('supertest');
const router = require('./parent-router');
const server = require('../api/server');

// GET - /api/parents
test("get all parents", async () => {
  const res = await supertest(server.use(router))
    .get("/")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// GET - /api/parents/:id
test("get a single parent", async () => {
  const res = await supertest(server.use(router))
    .get("/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// PUT - /api/parents/:id
test("update a parent", async () => {
  const res = await supertest(server.use(router))
    .put("/1")
    .send({
      username: "tiffany87",
      password: "123456",
      first_name: "Tiffany",
      last_name: "Simionescu",
      email: "lynnts@gmail.com",
      dob: 19870925,
      phone_number: 8675309,
      cpr_cert: true
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})
