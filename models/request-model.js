const db = require('../database/dbConfig');

module.exports = {
  findById,
  findParent,
  add,
  update, 
  remove
}

function findById(request_id) {
  return db("requests")
    .where({ request_id })
    .first();
}

function findParent(parent_id) {
  return db("requests")
    .where({ parent_id })
    .first();
}

async function add(request) {
  const [request_id] = await db("requests").insert(request);

  return findById(request_id);
}

function update(request_id, changes) {
  return db("requests")
    .where({ request_id })
    .update(changes, '*');
}

function remove(request_id) {
  return db("requests")
    .where({ request_id })
    .del();
}