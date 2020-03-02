
exports.up = async function(knex) {
  await knex.schema.createTable("offer_comments", offercomments => {

    offercomments.increments("offer_comment_id")

    offercomments.string("username", 128)
      .notNullable()

    offercomments.string("first_name", 128)
      .notNullable()

    offercomments.string("last_name", 128) 
      .notNullable()

    offercomments.string("offer_comment", 500)
      .notNullable()

    offercomments.integer("offer_id")
      .notNullable()
      .references("offer_id")
      .inTable("offers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    offercomments.integer("parent_id")
      .notNullable()
      .references("parent_id")
      .inTable("parents")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("offer_comments")
};
