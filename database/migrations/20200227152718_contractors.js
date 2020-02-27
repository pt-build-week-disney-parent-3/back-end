
exports.up = async function(knex) {
  await knex.schema.createTable("contractors", contractors => {

    contractors.increments("contractor_id")

    contractors.string("price", 128)
      .notNullable()

    contractors.integer("user_id")
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("contractors")
};
