const db = require('../database/dbConfig');

module.exports = {
  findById,
  findParent,
  add,
  update,
  remove
}

function findById(child_id) {
  return db("children")
    .where({ child_id })
    .first()
}

function findParent(parent_id) {
  return db("children")
    .where({ parent_id })
    .first();
}

async function add(child) {
  const [child_id] = await db("children").insert(child);

  return findById(child_id)
}

function update(child_id, changes) {
  return db("children")
    .where({ child_id })
    .update(changes, '*');
}

function remove(child_id) {
  return db("children")
    .where({ child_id })
    .del();
}