
exports.up = async function(knex) {
  await knex.schema.createTable("request_comments", reqcomments => {

    reqcomments.increments("request_comment_id")

    reqcomments.string("username", 128)
      .notNullable()

    reqcomments.string("first_name", 128)
      .notNullable()

    reqcomments.string("last_name", 128)
      .notNullable()

    reqcomments.string("request_comment", 500)
      .notNullable()

    reqcomments.integer("request_id")
      .notNullable()
      .references("request_id")
      .inTable("requests")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    reqcomments.integer("contractor_id")
      .references("contractor_id")
      .inTable("contractors")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    reqcomments.integer("parent_id")
      .references("parent_id")
      .inTable("parents")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("request_comments")
};
