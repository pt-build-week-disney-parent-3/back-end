exports.seed = function(knex) {
  return knex("offers").insert([
    {
      username: "tiffany88",
      first_name: "Tiffany",
      last_name: "Simionescu",
      offer: "I am willing to watch your children for the day",
      max_child_count: "3",
      location: "Magic Kingdom",
      time: "12:00 pm",
      contractor_id: 1
    }
  ])
}