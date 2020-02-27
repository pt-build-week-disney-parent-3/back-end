
exports.up = async function(knex) {
  await knex.schema.createTable("parents", parents => {

    parents.increments("parent_id")

    parents.integer("user_id")
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("parents")
};
