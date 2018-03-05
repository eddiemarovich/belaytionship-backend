
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
    table.increments()
    table.integer('from_user_id')
    table.foreign('from_user_id').references('users.id')
    table.integer('to_user_id')
    table.foreign('to_user_id').references('users.id')
    table.text('message').notNullable().defaultsTo('')
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = function(knex, Promise) {

};
