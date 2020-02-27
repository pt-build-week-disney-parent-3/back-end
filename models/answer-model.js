const db = require('../database/dbConfig');

module.exports = {
  findQuestion,
  findById,
  update,
  add,
  remove
}

function findQuestion(question_id) {
  return db("answers")
    .where({ question_id })
    .first()
}

function findById(answer_id) {
  return db("answers")
    .where({ answer_id })
    .first()
}

function update(answer_id, changes) {
  return db("answers")
    .where({ answer_id })
    .update(changes, '*');
}

async function add(answer) {
  const [answer_id] = await db("answers").insert(answer);

  return findById(answer_id);
}

function remove(answer_id) {
  return db("answers")
    .where({ answer_id })
    .del();
}