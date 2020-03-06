const model = require('./parent-model');
const db = require('../database/dbConfig');

describe("parent-model", () => {
  
  beforeEach(async () => {
    await db.seed.run();
  })
  
  afterAll(async () => {
    await db.destroy();
  });

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
    const parent = await model.findById(1)
    expect(parent).toBe(undefined);
  })
})