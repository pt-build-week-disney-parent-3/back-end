exports.seed = function(knex) {
  return knex("answers").insert([
    {
      username: "tiffany88",
      first_name: "Tiffany",
      last_name: "Simionescu",
      answer: "It's free for other parents to watch your children. Contractors prices vary.",
      question_id: 1,
      contractor_id: 1
    }
  ])
}