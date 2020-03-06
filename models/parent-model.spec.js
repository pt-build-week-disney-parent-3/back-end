const model = require('./parent-model');

describe("parent-model", () => {

  test("find", async () => {
    const res = await model.find();
    expect(res.length).toBe(2);
  })

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res.username).toBe("tiffany87")
  })

  test("update", async () => {
    await model.update(1, { username: "tiffany100" })
    const parent = await model.findById(1)
    expect(parent.username).toBe("tiffany100");
  })
})