const model = require('./request-comment-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db("request_comments").truncate();
})

describe("request-comment-model", () => {

  test("findRequest", async () => {
    const res = await model.findRequest(1);
    expect(res.length).toBe(0);
  })

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res.length).toBeLessThan(10)
  })

  test("update", async () => {
    await model.update(1, { username: "tiffany100" })
    const requestComment = await model.findById(1)
    // won't go through because restricted
    expect(requestComment.username).toBe(undefined);
  })

  test("add", async () => {
    await model.add({
      username: "tiffany87",
      first_name: "Tiffany",
      last_name: "Lynn",
      request_comment: "My offer comment for testing unit",
      request_id: 1,
      parent_id: 1
    })
    const requestComment = await db("request_comments");
    expect(requestComment.length).toBe(1);
  })

  test("remove", async () => {
    await model.remove(1)
    const requestComment = await db("request_comments");
    expect(requestComment.length).toBe(0)
  })
})