const db = require('../database/dbConfig');

module.exports = {
  findById,
  findUser,
  add,
  update,
  remove
}

function findById(offer_id) {
  return db("offers")
    .where({ offer_id })
    .first();
}

function findUser(user_id) {
  return db("offers")
    .where({ user_id })
    .first();
}

async function add(offer) {
  const [offer_id] = await db("offers").insert(offer);

  return findById(offer_id);
}

function update(offer_id, changes) {
  return db("offers")
    .where({ offer_id })
    .update(changes, '*');
}

function remove(offer_id) {
  return db("offers")
    .where({ offer_id })
    .del();
}