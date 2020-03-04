// const supertest = require('supertest');
// const router = require('./auth-router');
// const server = require('../api/server');
// const db = require('../database/dbConfig');

// beforeEach(async () => {
//   await db.seed.run();
// })

// afterAll(async () => {
//   await db.destroy();
// });

// let token;

// // Parents
// beforeAll((done) => {
//   supertest(server.use(router))
//     .post("/api/auth/register/parent")
//     .send({
//       username: "tiffany97",
//       password: "secret",
//       first_name: "Tiffany",
//       last_name: "Lynn",
//       email: "lyyn5@email.com",
//       dob: "Sept. 24th 1989",
//       phone_number: "000000123",
//       cpr_cert: false
//     })
//     .end((err, res) => {
//       token = res.body.token;
//       done();
//     })
// })

// describe("login new parent user", () => {
//   // token not being sent 
//   test("should require authorization", () => {
//     return supertest(server.use(router))
//       .post("/api/auth/login/parent")
//       .send({
//         username: "tiffany93",
//         password: "secret",
//       })
//       .set("authorization", `${token}`)
//       .then((res => {
//         expect(res.status).toBe(400)
//         expect(res.type).toBe("application/json")
//       }))
//   })
// })

// // // contractors
// // beforeAll((done) => {
// //   supertest(server.use(router))
// //     .post("/api/auth/register/contractor")
// //     .send({
// //       username: "tiffany96",
// //       password: "secret",
// //       first_name: "Tiffany",
// //       last_name: "Lynn",
// //       email: "lynnn5@email.com",
// //       dob: "Sept. 24th 1989",
// //       phone_number: "00000123",
// //       cpr_cert: false,
// //       price: "$20.00"
// //     })
// //     .end((err, res) => {
// //       token = res.body.token;
// //       done();
// //     })
// // })

// describe("login new contractor user", () => {
//   // token not being sent 
//   test("should require authorization", () => {
//     return supertest(server.use(router))
//       .post("/api/auth/login/contractor")
//       .send({
//         username: "tiffany94",
//         password: "secret",
//       })
//       .set("authorization", `${token}`)
//       .then((res => {
//         expect(res.status).toBe(400)
//         expect(res.type).toBe("application/json")
//       }))
//   })
// })

const authRouter = require('./auth-router');
const supertest = require('supertest');

let token;

describe("Auth Router Test - Parent login", () => {
  it('token is being passed', async () => {
    beforeAll(done => {
      supertest(authRouter)
        .post('/api/auth/login/parent')
        .send({
          username: "tiffany87",
          password: "123456"
        })
        .end((err, res) => {
          token = res.body.token,
          done();
        })
    })
  })
})

describe("Auth Router Test - Contractor login", () => {
  it('token is being passed', async () => {
    beforeAll(done => {
      supertest(authRouter)
        .post('/api/auth/login/contractor')
        .send({
          username: "tiffany88",
          password: "123456"
        })
        .end((err, res) => {
          token = res.body.token,
          done();
        })
    })
  })
})

describe("Auth Router Test - Parent register", () => {
  it('token is being passed', async () => {
    beforeAll(done => {
      supertest(authRouter)
        .post('/api/auth/register/parent')
        .send({
          username: "tiffany89",
          password: "123456"
        })
        .end((err, res) => {
          token = res.body.token,
          done();
        })
    })
  })
})

describe("Auth Router Test - Contractor register", () => {
  it('token is being passed', async () => {
    beforeAll(done => {
      supertest(authRouter)
        .post('/api/auth/register/contractor')
        .send({
          username: "tiffany90",
          password: "123456"
        })
        .end((err, res) => {
          token = res.body.token,
          done();
        })
    })
  })
})