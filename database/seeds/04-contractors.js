exports.seed = function(knex) {
  return knex("contractors").insert([
    { user_id: 2, price: "$20.00" }
  ])
}