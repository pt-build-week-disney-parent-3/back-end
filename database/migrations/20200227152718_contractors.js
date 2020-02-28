
exports.up = async function(knex) {
  await knex.schema.createTable("contractors", contractors => {

    contractors.increments("contractor_id")

    contractors.string("username", 128)
      .notNullable()
      .unique()

    contractors.string("password", 128)
      .notNullable()

    contractors.string("first_name", 128)
      .notNullable()

    contractors.string("last_name", 128)
      .notNullable()

    contractors.string("email", 128)
      .notNullable()
      .unique()

    contractors.string("dob", 128)
      .notNullable()

    contractors.string("phone_number", 10)
      .notNullable()
      .unique()

    contractors.string("cpr_cert", 5)
      .notNullable()
      .defaultTo(false)

    contractors.string("price", 128)
    .notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("contractors")
};
