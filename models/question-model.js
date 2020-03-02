const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  findParent,
  add,
  update,
  remove
}

const questionData = db("questions")
    .join("parents", "questions.parent_id", "parents.parent_id")
    .select(
      "parents.parent_id",
      "questions.question_id",
      "questions.username",
      "questions.first_name",
      "questions.last_name",
      "questions.question"
    )

function find() {
  return db("questions")
    .select("*")
}

function findById(question_id) {
  return db(questionData)
    .where({ question_id })
}

function findParent(parent_id) {
  return db("questions")
    .where({ parent_id })
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