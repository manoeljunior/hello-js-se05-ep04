const {knex} = require('./config')

let jogador = {
  nomejogador: 'Falcao',
  numerojogador: 12
}

knex('jogador').insert(jogador).select().then(res => {
  console.log(res)
  process.exit(0)
})
