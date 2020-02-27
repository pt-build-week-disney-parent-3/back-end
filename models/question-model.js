const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  findUser,
  add,
  update,
  remove
}

function find() {
  return db("questions")
    .select('*');
}

function findById(question_id) {
  return db("questions")
    .where({ question_id })
    .first();
}

function findUser(user_id) {
  return db("questions")
    .where({ user_id })
    .first()
}

async function add(question) {
  const [question_id] = await db("questions").insert(question);

  return findById(question_id);
}

function update(question_id, changes) {
  return db("questions")
    .where({ question_id })
    .update(changes, '*');
}

function remove(question_id) {
  return db("questions")
    .where({ question_id })
    .del();
}