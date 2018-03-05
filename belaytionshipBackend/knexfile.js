module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/belaytionship'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/belaytionship'
 },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
 },

}
