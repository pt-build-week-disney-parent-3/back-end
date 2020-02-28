
exports.up = async function(knex) {
  await knex.schema.createTable("users", users => {

    users.increments("user_id")

    users.string("username", 128)
      .notNullable()
      .unique()

    users.string("password", 128)
      .notNullable()

    users.string("first_name", 128)
      .notNullable()

    users.string("last_name", 128)
      .notNullable()

    users.string("email", 128)
      .notNullable()
      .unique()

    users.string("dob", 128)
      .notNullable()

    users.string("phone_number", 10)
      .notNullable()
      .unique()

      // true or false
    users.string("cpr_cert", 5)
      .defaultTo(false)
      .notNullable()

      // Parent or Contractor
    users.string("type", 10)
      .notNullable()

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users")
};
