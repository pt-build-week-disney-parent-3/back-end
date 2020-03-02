const db = require('../database/dbConfig');

module.exports = {
  findById,
  findRequest,
  add,
  update,
  remove
}

const requestCommentData = db("request_comments")
    .join("requests", "request_comments.request_id", "requests.request_id")
    .join("contractors", "request_comments.contractor_id", "contractors.contractor_id")
    .join("parents", "request_comments.parent_id", "parents.parent_id")
    .select(
      "request_comments.request_comment_id",
      "requests.request_id",
      "contractors.contractor_id",
      "parents.parent_id",
      "request_comments.username",
      "request_comments.first_name",
      "request_comments.last_name",
      "request_comments.request_comment",
    )

function findById(request_comment_id) {
  return db(requestCommentData)
    .where({ request_comment_id })
}

function findRequest(request_id) {
  return db("request_comments")
    .where({ request_id })
}

async function add(request_comment) {
  const [request_comment_id] = await db("request_comments").insert(request_comment);

  return findById(request_comment_id);
}

function update(request_comment_id, changes) {
  return db("request_comments")
    .where({ request_comment_id })
    .update(changes, '*');
}

function remove(request_comment_id) {
  return db("request_comments")
    .where({ request_comment_id })
    .del();
}