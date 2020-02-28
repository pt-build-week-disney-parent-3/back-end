const db = require('../database/dbConfig');

module.exports = {
  findParents,
  findContractors, 
  findByParentFilter,
  findByConstractorFilter, 
  findParentById,
  findContractorById,
  addParent,
  addContractor
}

function findParents() {
  return db("parents")
    .select("*")
}

function findContractors() {
  return db("contractors")
    .select("*")
}

function findByParentFilter(filter) {
  return db("parents")
    .where(filter);
}

function findByConstractorFilter(filter) {
  return db("contractors")
    .where(filter);
}

function findParentById(parent_id) {
  return db("parents")
    .where({ parent_id })
    .first();
}

function findContractorById(contractor_id) {
  return db("contractors")
    .where({ contractor_id })
    .first();
}

async function addParent(parent) {
  const [parent_id] = await db("parents").insert(parent);

  return findParentById(parent_id);
}

async function addContractor(contractor) {
  const [contractor_id] = await db("contractors").insert(contractor);

  return findContractorById(contractor_id);
}