
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.text('about').notNullable().defaultsTo('')
  })
}

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users')
}
