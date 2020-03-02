
exports.up = async function(knex) {
  await knex.schema.createTable("parents", parents => {

    parents.increments("parent_id")

    parents.string("username", 128)
      .notNullable()
      .unique()

    parents.string("password", 128)
      .notNullable()

    parents.string("first_name", 128)
      .notNullable()

    parents.string("last_name", 128)
      .notNullable()

    parents.string("email", 128)
      .notNullable()
      .unique()

    parents.string("dob", 128)
      .notNullable()

    parents.string("phone_number", 10)
      .notNullable()
      .unique()

    parents.string("cpr_cert", 5)
      .notNullable()
      .defaultTo(false)
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("parents")
};
