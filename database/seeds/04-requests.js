exports.seed = function(knex) {
  return knex("requests").insert([
    {
      username: "tiffany87",
      first_name: "Tiffany",
      last_name: "Simionescu",
      request: "I'm looking for someone to watch my son while my other children and I go on Splash Mountain",
      child_count: 1,
      location: "Magic Kingdom",
      time: "12:00 pm",
      stroller: false,
      ride: "Splash Mountain",
      parent_id: 1
    }
  ])
}