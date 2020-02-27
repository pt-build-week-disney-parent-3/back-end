const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  update
}

function find() {
  return db("contractors")
    .select('*');
}

function findById(contractor_id) {
  return db("contractors")
    .where({ contractor_id })
    .first();
}

function update(contractor_id, changes) {
  return db("contractors")
    .where({ contractor_id })
    .update(changes, '*');
}