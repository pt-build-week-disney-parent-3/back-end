const model = require('./contractor-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db("contractors").truncate();
})

describe("contractor-model", () => {

  test("find", async () => {
    const res = await model.find();
    expect(res.length).toBe(0);
  })

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res).toBe(undefined)
  })

  test("update", async () => {
    await model.update(1, { username: "tiffany100" })
    const contractor = await model.findById(1)
    expect(contractor).toBe(undefined);
  })
})