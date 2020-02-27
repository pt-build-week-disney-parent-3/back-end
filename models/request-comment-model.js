const db = require('../database/dbConfig');

module.exports = {
  findById,
  findRequest,
  add,
  update,
  remove
}

function findById(request_comment_id) {
  return db("request_comments")
    .where({ request_comment_id })
    .first();
}

function findRequest(request_id) {
  return db("request_comments")
    .where({ request_id })
    .first();
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