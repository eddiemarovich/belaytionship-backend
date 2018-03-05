exports.seed = function(knex, Promise) {
  return knex('messages').insert([
    {
      id: 1,
      from_user_id: 1,
      to_user_id: 3,
      message: 'Hey, what\'s up?'
    }, {
      id: 2,
      from_user_id: 3,
      to_user_id: 1,
      message: 'Not a whole lot, you?'
    }, {
      id: 3,
      from_user_id: 1,
      to_user_id: 3,
      message: 'Wanna meet at the gym at 11?'
    }, {
      id: 4,
      from_user_id: 3,
      to_user_id: 1,
      message: 'Perfect.  See you then.'
    }, {
      id: 5,
      from_user_id: 2,
      to_user_id: 3,
      message: 'Can you get outside this weekend?'
    }, {
      id: 6,
      from_user_id: 3,
      to_user_id: 2,
      message: 'Yea, wanna meet at settlers park to climb in bocan at 11 on sat?'
    }, {
      id: 7,
      from_user_id: 2,
      to_user_id: 3,
      message: 'Perf.'
    }, {
      id: 8,
      from_user_id: 1,
      to_user_id: 2,
      message: 'Wanna climb later?'
    }
  ]).then(() => {
    return knex.raw(
      `SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages));`
    )
  })
}
