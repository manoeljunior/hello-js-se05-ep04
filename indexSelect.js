const {knex} = require('./config')

// knex('jogador').select().then(res => {
//   console.log(res)
//   process.exit(0)
// })

knex('jogador').select().then(res => {
  console.log(res)
  process.exit(0)
})
