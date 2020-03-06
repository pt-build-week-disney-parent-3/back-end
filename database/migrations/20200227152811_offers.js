
exports.up = async function(knex) {
  await knex.schema.createTable("offers", offers => {

    offers.increments("offer_id")

    offers.string("username", 128)
      .notNullable()

    offers.string("first_name", 128)
      .notNullable()

    offers.string("last_name", 128)
      .notNullable()

    offers.string("offer", 500)
      .notNullable()

    offers.integer("max_child_count", 128)
      .notNullable()

    offers.string("location", 128)
      .notNullable()

    offers.string("time", 128)
      .notNullable()

    offers.integer("contractor_id")
      .notNullable()
      .references("contractor_id")
      .inTable("contractors")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("offers")
};
