const model = require('./answer-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db.seed.run();
})

describe("answer-model", () => {

  test("findQuestion", async () => {
    const res = await model.findQuestion(1);
    expect(res.length).toBeGreaterThan(0);
  })

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res.length).toBeLessThan(10)
  })

  test("update", async () => {
    await model.update(1, { username: "tiffany100" })
    const answers = await model.findById(1)
    // won't go through because restricted
    expect(answers.username).toBe(undefined);
  })

  test("add", async () => {
    await model.add({
      username: "tiffany88",
      first_name: "Tiffany",
      last_name: "Lynn",
      answer: "My answer model answer",
      question_id: 1,
      contractor_id: 1
    })
    const answers = await db("answers").select();
    expect(answers.length).toBe(2);
  })

  test("remove", async () => {
    await model.remove(2)
    const answers = await db("answers").select();
    expect(answers.length).toBe(1)
  })
})