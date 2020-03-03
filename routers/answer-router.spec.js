const supertest = require('supertest');
const router = require('./answer-router');
const authRouter = require('./auth-router');
const server = require('../api/server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

afterAll(async () => {
  await db.destroy();
});

// Parents
// beforeAll((done) => {
//   supertest(server.use(authRouter))
//     .post("/api/auth/login/contractor")
//     .send({
//       username: "tiffany94",
//       password: "secret"
//     })
//     .end((err, res) => {
//       token = res.body.token;
//       done();
//     })
// })

// describe("answer router tests", () => {

//   // GET - /api/answers/question/:id 
//   test("get all answers to a question", () => {
//     return supertest(server.use(router))
//       .get("/api/answers/question/1")
//       .set("authorization", `${token}`)
//       .then((res => {
//         expect(res.status).toBe(403)
//         expect(res.type).toBe("application/json")
//       }))
//   })

  // // GET - /api/answers/:id
  // test("get single answer", () => {
  //   return supertest(server.use(router))
  //     .get("/api/answers/1")
  //     .set("authorization", `${token}`)
  //     .then((res => {
  //       expect(res.status).toBe(400)
  //       expect(res.type).toBe("application/json")
  //     }))
  // })

  // // POST - /api/answers
  // test("get single answer", () => {
  //   return supertest(server.use(router))
  //     .post("/api/answers")
  //     .send({
  //       username: "tiffany93",
  //       first_name: "Tiffany",
  //       last_name: "Simionescu",
  //       answer: "My test answer",
  //       question_id: 1,
  //     })
  //     .set("authorization", `${token}`)
  //     .then((res => {
  //       expect(res.status).toBe(400)
  //       expect(res.type).toBe("application/json")
  //     }))
  // })

  // // PUT - /api/answers/:id
  // test("update single answer", () => {
  //   return supertest(server.use(router))
  //     .put("/api/answers/1")
  //     .send({
  //       username: "tiffany93",
  //       first_name: "Tiffany",
  //       last_name: "Simionescu",
  //       answer: "My updated test answer",
  //       question_id: 1,
  //     })
  //     .set("authorization", `${token}`)
  //     .then((res => {
  //       expect(res.status).toBe(400)
  //       expect(res.type).toBe("application/json")
  //     }))
  // })

  // // DELETE - /api/answers/:id
  // test("delete single answer", () => {
  //   return supertest(server.use(router))
  //     .delete("/api/answers/2")
  //     .set("authorization", `${token}`)
  //     .then((res => {
  //       expect(res.status).toBe(400)
  //       expect(res.type).toBe("application/json")
  //     }))
  // })
// })

// GET - /api/answers/question/:id
test("get all answers to a question", async () => {
  const res = await supertest(server.use(router))
    .get("/api/answers/question/1")
    // .set("jwtSecret", "My favorite park is Epcot")
  expect(res.status).toBe(400)
  expect(res.type).toBe("application/json")
})

// GET - /api/answers/:id
test("get single answer", async () => {
  const res = await supertest(server.use(router))
    .get("/api/answers/1")
    // .set("authorization", `${token}`)
  expect(res.status).toBe(400)
  expect(res.type).toBe("application/json")
})

// // POST - /api/answers
// test("add answer with no req.body", async () => {
//   const res = await supertest(server.use(router))
//     .post("/api/answers/")
//     .send({ 
//       username: "tiffany88",
//       first_name: "Tiffany",
//       last_name: "Lynn",
//       answer: "My Answer",
//       question_id: 1,
//       contractor_id: 1
//     })
//     // .set("authorization", `${token}`)
//   expect(res.status).toBe(403)
//   expect(res.type).toBe("application/json")
// })

// // PUT - /api/answers/:id
// test("get single answer - no req.body, wrong id", async () => {
//   const res = await supertest(server.use(router))
//     .put("/api/answers/1")
//     // .set("authorization", `${token}`)
//     .send({ 
//       username: "tiffany88",
//       first_name: "Tiffany",
//       last_name: "Lynn",
//       answer: "My New Answer",
//       question_id: 1,
//       contractor_id: 1
//     })
//   expect(res.status).toBe(403)
//   expect(res.type).toBe("application/json")
// })

// // DELETE - /api/answers/:id
// test("delete answer - id doesn't exist", async () => {
//   const res = await supertest(server.use(router))
//     .delete("/api/answers/100")
//     // .set("authorization", `${token}`)
//   expect(res.status).toBe(403)
//   expect(res.type).toBe("application/json")
// })
