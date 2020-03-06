const model = require('./contractor-model');
const db = require('../database/dbConfig');

describe("contractor-model", () => {

  test("find", async () => {
    const res = await model.find();
    expect(res.length).toBe(2);
  })

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res.username).toBe("tiffany88")
  })

  test("update", async () => {
    await model.update(1, { username: "tiffany100" })
    const contractor = await model.findById(1)
    expect(contractor.username).toBe("tiffany100");
  })
})