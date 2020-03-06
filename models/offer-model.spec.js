const model = require('./offer-model');
const db = require('../database/dbConfig');

describe("offer-model", () => {

  test("findContractor", async () => {
    const res = await model.findContractor(1);
    expect(res.length).toBe(1);
  })

  test("findById", async () => {
    const res = await model.findById(1);
    expect(res.username).toBe("tiffany88")
  })

  test("add", async () => {
    await model.add({
      username: "tiffany88",
      first_name: "Tiffany",
      last_name: "Lynn",
      offer: "My offer comment for testing unit",
      max_child_count: 1,
      location: "Magic Kingdom",
      time: "3pm",
      contractor_id: 1
    })
    const offer = await db("offers");
    expect(offer.length).toBe(2);
  })

  test("update", async () => {
    await model.update(1, { username: "tiffany100" })
    const offer = await model.findById(1)
    expect(offer.username).toBe("tiffany100");
  })

  test("remove", async () => {
    await model.remove(1)
    const offer = await db("offer_comments");
    expect(offer.length).toBe(0)
  })
})