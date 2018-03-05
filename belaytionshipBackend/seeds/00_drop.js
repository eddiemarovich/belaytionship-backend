
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() =>  knex('likes').del())
    .then(() =>  knex('messages').del())
  }
