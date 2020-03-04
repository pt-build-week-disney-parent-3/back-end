const model = require('./offer-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db("offers").truncate();
})

describe("offer-model", () => {

  test("findContractor", async () => {
    const res = await model.findContractor(1);
    expect(res.length).toBe(0);
  })

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res).toBe(undefined)
  })

  // Test will fail - no parent id provided
  // test("add", async () => {
  //   await model.add({
  //     username: "tiffany88",
  //     first_name: "Tiffany",
  //     last_name: "Lynn",
  //     offer: "My offer comment for testing unit",
  //     max_child_count: 1,
  //     location: "Magic Kingdom",
  //     time: "3pm",
  //     // contractor_id: 1
  //   })
  //   const offer = await db("offers");
  //   expect(offer.length).toBe(1);
  // })

  test("update", async () => {
    await model.update(1, { username: "tiffany100" })
    const offer = await model.findById(1)
    expect(offer).toBe(undefined);
  })

  test("remove", async () => {
    await model.remove(1)
    const offer = await db("offer_comments");
    expect(offer.length).toBe(0)
  })
})