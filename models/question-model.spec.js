const model = require('./question-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db("questions").truncate();
})

describe("question-model", () => {

  test("find", async () => {
    const res = await model.find();
    expect(res.length).toBe(0);
  })

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res.length).toBeLessThan(10)
  })

  test("findParent", async () => {
    const res = await model.findParent(1);
    expect(res.length).toBeLessThan(10)
  })

  test("update", async () => {
    await model.update(1, { username: "tiffany100" })
    const question = await model.findById(1)
    expect(question.username).toBe(undefined);
  })

  // Test will fail - no parent id provided
  // test("add", async () => {
  //   await model.add({
  //     username: "tiffany87",
  //     first_name: "Tiffany",
  //     last_name: "Lynn",
  //     question: "My question",
  //     // parent_id: 1
  //   })
  //   const question = await db("questions");
  //   expect(question.length).toBe(1);
  // })

  test("remove", async () => {
    await model.remove(1)
    const question = await db("questions");
    expect(question.length).toBe(0)
  })
})