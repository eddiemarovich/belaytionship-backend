exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {
      id: 1,
      name: 'Eddie',
      about: 'Looking for partners to project sport routes in the front range in the mid 5.13 range'
    }, {
      id: 2,
      name: 'Nigel',
      about: 'Psyched on earning how to lead climb.'
    }, {
      id: 3,
      name: 'Ashly',
      about: 'Looking for a partner for Yosemite this spring.  I have a few big objectives in mind and would like to get out on weekends to see if we could make a good team.'
    }, {
      id: 4,
      name: 'Steph',
      about: 'In need of hangboard buddies.  '
    }, {
      id: 5,
      name: 'Olivia',
      about: 'Trying to break the speed record on the Naked edge.  Need fast partners.'
    }, {
      id: 6,
      name: 'Brent',
      about: 'In search of hard projects that transcend space-time.'
    }, {
      id: 7,
      name: 'Sean',
      about: 'Im trying to get as comfortable taking big whippers as I am building Python servers.'
    }
  ]).then(() => {
    return knex.raw(
      `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
    )
  })
}
