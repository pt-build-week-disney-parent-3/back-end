const db = require('../database/dbConfig');

module.exports = {
  findOffer,
  findById,
  add,
  update,
  remove
}

const offerCommentData = db("offer_comments")
    .join("offers", "offer_comments.offer_id", "offers.offer_id")
    .join("parents", "offer_comments.parent_id", "parents.parent_id")
    .select(
      "offer_comments.offer_comment_id",
      "offers.offer_id",
      "parents.parent_id",
      "offer_comments.username",
      "offer_comments.first_name",
      "offer_comments.last_name",
      "offer_comments.offer_comment",
    )

function findOffer(offer_id) {
  return db(offerCommentData)
    .where({ offer_id})
}

function findById(offer_comment_id) {
  return db("offer_comments")
    .where({ offer_comment_id})
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