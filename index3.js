const {knex} = require('./config')

let idjogador = 17 
let numerojogador = 20

knex('jogador').update({numerojogador}).where({idjogador}).then(res => {
  console.log(res)
  process.exit(0)
})
