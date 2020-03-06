const model = require('./child-model');
const db = require('../database/dbConfig');

describe("child-model", () => {

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res.first_name).toBe("Dougie")
  })

  test("findParent", async () => {
    const res = await model.findParent(1);
    expect(res.length).toBe(1);
  })

  test("update", async () => {
    await model.update(1, { first_name: "Mirielle" })
    const child = await model.findById(1)
    expect(child.first_name).toBe("Mirielle");
  })

  test("add", async () => {
    await model.add({
      first_name: "Vivien",
      last_name: "Lynn",
      dob: "December",
      allergies: "none",
      medical_conditions: "none",
      special_instructions: "none",
      parent_id: 1
    })
    const child = await db("children");
    expect(child.length).toBeLessThan(10);
  })

  test("remove", async () => {
    await model.remove(1)
    const child = await db("children").select();
    expect(child.length).toBe(1)
  })
})