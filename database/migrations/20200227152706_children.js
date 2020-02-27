
exports.up = async function(knex) {
  await knex.schema.createTable("children", children => {

    children.increments("child_id")

    children.string("first_name", 128)
      .notNullable()

    children.string("last_name", 128)
      .notNullable()

    children.string("dob", 128)
      .notNullable()

    children.string("allergies", 500)

    children.string("medical_conditions", 500)

    children.string("special_instructions", 500)

    children.integer("parent_id")
      .notNullable()
      .references("parent_id")
      .inTable("parents")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("children")
};
