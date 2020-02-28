exports.seed = function(knex) {
  return knex("request_comments").insert([
    {
      username: "tiffany88",
      first_name: "Tiffany",
      last_name: "Simionescu",
      request_comment: "I am willing to take the job for you.",
      request_id: 1,
      user_id: 2
    }
  ])
}