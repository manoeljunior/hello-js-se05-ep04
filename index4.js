const {knex} = require('./config')

let idjogador = 17 

knex('jogador').del().where({idjogador}).then(res => {
  console.log(res)
  process.exit(0)
})
