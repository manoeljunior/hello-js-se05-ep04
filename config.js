const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './contatos.db'
  },
  useNullAsDefault: true
})

module.exports = {knex}