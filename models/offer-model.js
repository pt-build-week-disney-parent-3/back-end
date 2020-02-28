const db = require('../database/dbConfig');

module.exports = {
  findById,
  findContractor,
  add,
  update,
  remove
}

const offerData = db("offers")
    .join("contractors", "offers.contractor_id", "contractors.contractor_id")
    .select(
      "contractors.contractor_id",
      "offers.offer_id",
      "offers.username",
      "offers.first_name",
      "offers.last_name",
      "offers.offer",
      "offers.max_child_count",
      "offers.location",
      "offers.time"
    )

function findById(offer_id) {
  return db("offers")
    .where({ offer_id })
    .first();
}

function findContractor(contractor_id) {
  return db(offerData)
    .where({ contractor_id })
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