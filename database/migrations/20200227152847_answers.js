
exports.up = async function(knex) {
  await knex.schema.createTable("answers", answers => {

    answers.increments("answer_id")

    answers.string("username", 128)
      .notNullable()

    answers.string("first_name", 128)
      .notNullable()

    answers.string("last_name", 128)
      .notNullable()

    answers.string("answer", 500)
      .notNullable()

    answers.integer("question_id")
      .notNullable()
      .references("question_id")
      .inTable("questions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    answers.integer("contractor_id")
      .notNullable()
      .references("contractor_id")
      .inTable("contractors")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("answers")
};
