const model = require('./auth-model');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db("parents").truncate();
  await db("contractors").truncate();
})

describe("auth-model", () => {

  test("findParents", async () => {
    const res = await model.findParents();
    expect(res.length).toBe(0);
  })

  test("findContractors", async () => {
    const res = await model.findContractors();
    expect(res.length).toBe(0);
  })

  test("findByParentFilter", async () => {
    const res = await model.findByParentFilter({ first_name: "Tiffany" });
    expect(res).toBe(undefined);
  })

  test("findByContractorFilter", async () => {
    const res = await model.findByConstractorFilter({ first_name: "Tiffany" });
    expect(res).toBe(undefined);
  })

  test("addParent", async () => {
    await model.addParent({
      username: "tiffany101",
      password: "123456",
      first_name: "Tiffany",
      last_name: "Lynn",
      email: "a@email.com",
      dob: "December",
      phone_number: "000",
      cpr_cert: false
    })
    const parent = await db("parents");
    expect(parent.length).toBeLessThan(5);
  })

  test("findByParentId", async () => {
    const res = await model.findParentById(1);
    expect(res).toBe(undefined)
  })

  test("addContractor", async () => {
    await model.addContractor({
      username: "tiffany102",
      password: "123456",
      first_name: "Tiffany",
      last_name: "Lynn",
      email: "b@email.com",
      dob: "December",
      phone_number: "0000",
      cpr_cert: true,
      price: "$20.00"
    })
    const contractor = await db("contractors");
    expect(contractor.length).toBeLessThan(5);
  })

  test("findByContractorId", async () => {
    const res = await model.findContractorById(1);
    expect(res).toBe(undefined)
  })
})