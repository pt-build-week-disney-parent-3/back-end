exports.seed = function(knex) {
  return knex("parents").insert([
    { user_id: 1 }
  ])
}