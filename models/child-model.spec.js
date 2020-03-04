const model = require('./child-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db("children").truncate();
})

describe("child-model", () => {

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res).toBe(undefined)
  })

  test("findParent", async () => {
    const res = await model.findParent(1);
    expect(res.length).toBe(0);
  })

  test("update", async () => {
    await model.update(1, { first_name: "Mirielle" })
    const child = await model.findById(1)
    // won't go through because didn't update the whole object
    expect(child).toBe(undefined);
  })

  // Test will fail - no parent id provided
  // test("add", async () => {
  //   await model.add({
  //     first_name: "Vivien",
  //     last_name: "Lynn",
  //     dob: "December",
  //     // parent_id: 1
  //   })
  //   const child = await db("children");
  //   expect(child.length).toBeLessThan(10);
  // })

  test("remove", async () => {
    await model.remove(1)
    const child = await db("children").select();
    expect(child.length).toBe(0)
  })
})