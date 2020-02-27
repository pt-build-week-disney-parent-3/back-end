const db = require('../database/dbConfig');

module.exports = {
  findOffer,
  findById,
  add,
  update,
  remove
}

function findOffer(offer_id) {
  return db("offer_comments")
    .where({ offer_id})
    .first()
}

function findById(offer_comment_id) {
  return db("offer_comments")
    .where({ offer_comment_id})
    .first();
}

async function add(offer_comment) {
  const [offer_comment_id] = await db("offer_comments").insert(offer_comment)

  return findById(offer_comment_id);
}

function update(offer_comment_id, changes) {
  return db("offer_comments")
    .where({ offer_comment_id })
    .update(changes, '*');
}

function remove(offer_comment_id) {
  return db("offer_comments")
    .where({ offer_comment_id})
    .del();
}