const supertest = require("supertest");
const server = require('./api/server');

test("Root Route", async () => {
  const res = await supertest(server).get('/')

  expect(res.status).toBe(200)
  expect(res.type).toBe("application/json")
  expect(res.body.message).toBe("Welcome to the Disney Parent 3 API!")
})