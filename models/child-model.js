const db = require('../database/dbConfig');

module.exports = {
  findById,
  findParent,
  add,
  update,
  remove
}

const childData = db("children")
    .join("parents", "children.parent_id", "parents.parent_id")
    .select(
      "parents.parent_id",
      "children.child_id",
      "children.first_name",
      "children.last_name",
      "children.dob",
      "children.allergies",
      "children.medical_conditions",
      "children.special_instructions",
    )

function findById(child_id) {
  return db(childData)
    .where({ child_id })
    .first()
}

function findParent(parent_id) {
  return db(childData)
    .where({ parent_id })
    .first();
}

async function add(child) {
  const [child_id] = await db(childData).insert(child);

  return findById(child_id)
}

function update(child_id, changes) {
  return db(childData)
    .where({ child_id })
    .update(changes, '*');
}

function remove(child_id) {
  return db(childData)
    .where({ child_id })
    .del();
}