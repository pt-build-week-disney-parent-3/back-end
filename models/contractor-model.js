const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  update
}

const contractorData = db("contractors")
    .join("users", "contractors.user_id", "users.user_id")
    .select(
      "users.user_id",
      "contractors.contractor_id",
      "users.username",
      "users.password",
      "users.first_name",
      "users.last_name",
      "users.email",
      "users.dob",
      "users.phone_number",
      "users.cpr_cert",
      "contractors.price",
      "users.type"
    )

function find() {
  return db(contractorData);
}

function findById(contractor_id) {
  return db(contractorData)
    .where({ contractor_id })
    .first();
}

function update(contractor_id, changes) {
  return db(contractorData)
    .where({ contractor_id })
    .update(changes, '*');
}