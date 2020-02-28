const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  update
}

function find() {
  return db("parents")
    .select("*")
}

function findById(parent_id) {
  return db("parents")
    .where({ parent_id })
    .first();
}

function update(parent_id, changes) {
  return db("parents")
    .where({ parent_id })
    .update(changes, '*');
}