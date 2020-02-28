exports.seed = function(knex) {
  return knex("users").insert([
    {
      username: "tiffany87",
      password: "123456",
      first_name: "Tiffany",
      last_name: "Simionescu",
      email: "tiffany@email.com",
      dob: "Sept. 25, 1987",
      phone_number: "0000000000",
      cpr_cert: true,
      type: "parent"
    },
    {
      username: "tiffany88",
      password: "123456",
      first_name: "Tiffany",
      last_name: "Simionescu",
      email: "tiffany2@email.com",
      dob: "Sept. 25, 1987",
      phone_number: "0000000001",
      cpr_cert: true,
      type: "contractor"
    }
  ])
}