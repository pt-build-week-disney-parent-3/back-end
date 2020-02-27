
exports.up = async function(knex) {
  await knex.schema.createTable("requests", requests => {

    requests.increments("request_id")

    requests.string("username", 128)
      .notNullable()

    requests.string("first_name", 128)
      .notNullable()

    requests.string("last_name", 128)
      .notNullable()

    requests.string("request", 500)
      .notNullable()

    requests.string("child_count", 128)
      .notNullable()

    requests.string("location", 128)
      .notNullable()

    requests.string("time", 128)
      .notNullable()

    requests.string("stroller", 5)
      .defaultTo(false)

    requests.string("ride", 128)
      .notNullable()

    requests.integer("parent_id")
      .notNullable()
      .references("parent_id")
      .inTable("parents")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("requests")
};
