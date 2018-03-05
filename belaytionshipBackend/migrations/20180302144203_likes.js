
exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', table => {
    table.increments()
    table.integer('user_id')
    table.foreign('user_id').references('users.id')
    table.integer('liked_id')
    table.foreign('liked_id').references('users.id')
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = function(knex, Promise) {
  knex.schema.dropTable('likes')
}
