exports.seed = function(knex) {
  return knex("questions").insert([
    {
      username: "tiffany87",
      first_name: "Tiffany",
      last_name: "Simionescu",
      question: "How much does it cost for a parent to watch my child?",
      parent_id: 1
    }
  ])
}