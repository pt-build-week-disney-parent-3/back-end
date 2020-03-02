exports.seed = function(knex) {
  return knex("offer_comments").insert([
    {
      username: "tiffany87",
      first_name: "Tiffany",
      last_name: "Simionescu",
      offer_comment: "I have one child that I need babysitting for.",
      offer_id: 1,
      parent_id: 1
    }
  ])
}