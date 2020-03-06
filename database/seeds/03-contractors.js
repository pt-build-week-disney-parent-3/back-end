exports.seed = function(knex) {
  return knex("contractors").insert([
    {
      username: "tiffany88",
      password: "123456",
      first_name: "Tiffany",
      last_name: "Lynn",
      email: "lynn@email.com",
      dob: 19870925,
      phone_number: 3000000001,
      cpr_cert: true,
      price: 20.00
    }
  ])
}