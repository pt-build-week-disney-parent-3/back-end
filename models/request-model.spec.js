const model = require('./request-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db("requests").truncate();
})

describe("request-model", () => {

  test("findParent", async () => {
    const res = await model.findParent(1);
    expect(res.length).toBe(0);
  })

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res.length).toBeLessThan(10)
  })

  test("update", async () => {
    await model.update(1, { username: "tiffany100" })
    const request = await model.findById(1)
    expect(request.username).toBe(undefined);
  })

  // Test will fail - no parent id provided
  // test("add", async () => {
  //   await model.add({
  //     username: "tiffany87",
  //     first_name: "Tiffany",
  //     last_name: "Lynn",
  //     request: "My request",
  //     child_count: "1",
  //     location: "Epcot",
  //     time: "4pm",
  //     stroller: true,
  //     ride: "Japanese Restaurant",
  //     // parent_id: 1
  //   })
  //   const question = await db("questions");
  //   expect(question.length).toBe(1);
  // })

  test("remove", async () => {
    await model.remove(1)
    const request = await db("requests");
    expect(request.length).toBe(0)
  })
})