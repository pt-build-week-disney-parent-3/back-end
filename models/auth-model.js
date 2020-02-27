const db = require('../database/dbConfig');

module.exports = {
  find, 
  findBy, 
  findById,
  add
}

function find() {
  return db("users")
    .select("*")
}

function findBy(filter) {
  return db("users")
    .where(filter);
}

function findById(user_id) {
  return db("users")
    .where({ user_id })
    .first();
}

async function add(user) {
  const [user_id] = await db("users").insert(user);

  return findById(user_id);
}