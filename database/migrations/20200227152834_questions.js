
exports.up = async function(knex) {
  await knex.schema.createTable("questions", questions => {

    questions.increments("question_id")

    questions.string("username", 128)
      .notNullable()

    questions.string("first_name", 128)
      .notNullable()

    questions.string("last_name", 128)
      .notNullable()

    questions.string("question", 500)
      .notNullable()

    questions.integer("parent_id")
      .notNullable()
      .references("parent_id")
      .inTable("parents")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("questions")
};
