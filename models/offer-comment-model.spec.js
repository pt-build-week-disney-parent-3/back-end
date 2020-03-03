const model = require('./offer-comment-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db("offer_comments").truncate();
})

describe("offer-comment-model", () => {

  test("findOffer", async () => {
    const res = await model.findOffer(1);
    expect(res.length).toBeGreaterThan(0);
  })

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res.length).toBeLessThan(10)
  })

  test("update", async () => {
    await model.update(1, { username: "tiffany100" })
    const offerComment = await model.findById(1)
    // won't go through because restricted
    expect(offerComment.username).toBe(undefined);
  })

  test("add", async () => {
    await model.add({
      username: "tiffany88",
      first_name: "Tiffany",
      last_name: "Lynn",
      offer_comment: "My offer comment for testing unit",
      offer_id: 1,
      parent_id: 1
    })
    const offerComment = await db("offer_comments");
    expect(offerComment.length).toBe(1);
  })

  test("remove", async () => {
    await model.remove(1)
    const offerComment = await db("offer_comments");
    expect(offerComment.length).toBe(0)
  })
})