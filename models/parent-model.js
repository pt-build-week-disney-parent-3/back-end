const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  update
}

const parentData = db("parents")
    .join("users", "parents.user_id", "users.user_id")
    .select(
      "users.user_id",
      "parents.parent_id",
      "users.username",
      "users.password",
      "users.first_name",
      "users.last_name",
      "users.email",
      "users.dob",
      "users.phone_number",
      "users.cpr_cert",
      "users.type"
    )

function find() {
  return db(parentData);
}

function findById(parent_id) {
  return db(parentData)
    .where({ parent_id })
    .first();
}

function update(parent_id, changes) {
  return db(parentData)
    .where({ parent_id })
    .update(changes, '*');
}