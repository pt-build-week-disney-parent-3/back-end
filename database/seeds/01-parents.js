exports.seed = function(knex) {
  return knex("parents").insert([
    {
      username: "tiffany87",
      password: "123456",
      first_name: "Tiffany",
      last_name: "Simionescu",
      email: "tiffany@email.com",
      dob: 19870925,
      phone_number: 3000000000,
      cpr_cert: true,
    }
  ])
}