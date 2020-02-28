exports.seed = function(knex) {
  return knex("children").insert([
    {
      first_name: "Dougie",
      last_name: "Simionescu",
      dob: "May 31st, 2013",
      allergies: "none",
      medical_conditions: "none",
      special_instructions: "none",
      parent_id: 1
    }
  ])
}