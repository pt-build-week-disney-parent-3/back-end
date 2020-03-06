
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

    contractors.date("dob")
      .notNullable()

    contractors.integer("phone_number")
      .notNullable()
      .unique()

    contractors.string("cpr_cert", 5)
      .notNullable()
      .defaultTo(false)

    contractors.float("price")
      .notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("contractors")
};
