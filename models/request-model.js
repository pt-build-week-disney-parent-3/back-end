const db = require('../database/dbConfig');

module.exports = {
  findById,
  findParent,
  add,
  update, 
  remove
}

const requestData = db("requests")
    .join("parents", "requests.parent_id", "parents.parent_id")
    .select(
      "parents.parent_id",
      "requests.request_id",
      "requests.username",
      "requests.first_name",
      "requests.last_name",
      "requests.request",
      "requests.child_count",
      "requests.location",
      "requests.time",
      "requests.stroller",
      "requests.ride"
    )

function findById(request_id) {
  return db(requestData)
    .where({ request_id })
}

function findParent(parent_id) {
  return db("requests")
    .where({ parent_id })
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