exports.seed = async (knex) => {
  await knex("users").truncate();
  await knex("parents").truncate();
  await knex("children").truncate();
  await knex("contractors").truncate();
  await knex("requests").truncate();
  await knex("request_comments").truncate();
  await knex("offers").truncate();
  await knex("offer_comments").truncate();
  await knex("questions").truncate();
  await knex("answers").truncate();
}