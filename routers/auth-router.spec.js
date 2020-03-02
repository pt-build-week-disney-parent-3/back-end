const supertest = require('supertest');
const router = require('./auth-router');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

afterAll(async () => {
  await db.destroy();
});

let token;

// Parents
beforeAll((done) => {
  supertest(server.use(router))
    .post("/api/auth/register/parent")
    .send({
      username: "tiffany89",
      password: "secret",
      first_name: "Tiffany",
      last_name: "Lynn",
      email: "lyn5@email.com",
      dob: "Sept. 24th 1989",
      phone_number: "0000000123",
      cpr_cert: false
    })
    .end((err, res) => {
      token = res.body.token;
      done();
    })
})

describe("login new parent user", () => {
  // token not being sent 
  test("should require authorization", () => {
    return supertest(server.use(router))
      .post("/api/auth/login/parent")
      .send({
        username: "tiffany89",
        password: "secret",
      })
      .set("authorization", `${token}`)
      .then((res => {
        expect(res.status).toBe(400)
        expect(res.type).toBe("application/json")
      }))
  })
})

// contractors
beforeAll((done) => {
  supertest(server.use(router))
    .post("/api/auth/register/contractor")
    .send({
      username: "tiffany90",
      password: "secret",
      first_name: "Tiffany",
      last_name: "Lynn",
      email: "lynn5@email.com",
      dob: "Sept. 24th 1989",
      phone_number: "000000123",
      cpr_cert: false,
      price: "$20.00"
    })
    .end((err, res) => {
      token = res.body.token;
      done();
    })
})

describe("login new contractor user", () => {
  // token not being sent 
  test("should require authorization", () => {
    return supertest(server.use(router))
      .post("/api/auth/login/contractor")
      .send({
        username: "tiffany90",
        password: "secret",
      })
      .set("authorization", `${token}`)
      .then((res => {
        expect(res.status).toBe(400)
        expect(res.type).toBe("application/json")
      }))
  })
})