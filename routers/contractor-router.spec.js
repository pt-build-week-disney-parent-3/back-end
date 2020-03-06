const supertest = require('supertest');
const router = require('./contractor-router');
const server = require('../api/server');

// GET - /api/contractors
test("get all contractors", async () => {
  const res = await supertest(server.use(router))
    .get("/")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
}) 

// GET - /api/contractors/:id
test("get a single contractor", async () => {
  const res = await supertest(server.use(router))
    .get("/1")
  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
})

// PUT - /api/contractors/:id
test("update contractor", async () => {
  const res = await supertest(server.use(router))
    .put("/1")
    .send({
      username: "tiffany88",
      password: "123456",
      first_name: "Tiffany",
      last_name: "NewLastName",
      email: "e@r.com",
      dob: 19870925,
      phone_number: 300321,
      cpr_cert: true,
      price: 20.00
    })
  expect(res.status).toBe(201)
  expect(res.type).toBe("application/json")
})