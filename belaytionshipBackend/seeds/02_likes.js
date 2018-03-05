exports.seed = function(knex, Promise) {
  return knex('likes').insert([
    {
      id: 1,
      user_id: 1,
      liked_id: 3
    }, {
      id: 2,
      user_id: 1,
      liked_id: 2
    }, {
      id: 3,
      user_id: 1,
      liked_id: 4
    }, {
      id: 4,
      user_id: 1,
      liked_id: 5
    }, {
      id: 5,
      user_id: 2,
      liked_id: 3
    }, {
      id: 6,
      user_id: 2,
      liked_id: 1
    }, {
      id: 7,
      user_id: 2,
      liked_id: 4
    }, {
      id: 8,
      user_id: 3,
      liked_id: 2
    }, {
      id: 9,
      user_id: 3,
      liked_id: 1
    }
  ]).then(() => {
    return knex.raw(
      `SELECT setval('likes_id_seq', (SELECT MAX(id) FROM likes));`
    )
  })
};
