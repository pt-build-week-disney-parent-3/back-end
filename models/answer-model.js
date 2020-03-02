const db = require('../database/dbConfig');

module.exports = {
  findQuestion,
  findById,
  update,
  add,
  remove
}

const answerData = db("answers")
    .join("questions", "answers.question_id", "questions.question_id")
    .join("contractors", "answers.contractor_id", "contractors.contractor_id")
    .select(
      "answers.answer_id",
      "questions.question_id",
      "contractors.contractor_id",
      "answers.username",
      "answers.first_name",
      "answers.last_name",
      "answers.answer",
    )

function findQuestion(question_id) {
  return db(answerData)
    .where({ question_id })
}

function findById(answer_id) {
  return db("answers")
    .where({ answer_id })
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