const {knex} = require('./config')

if (process.argv.length < 3) {
  return console.log('Too many arguments!!!')
}
 
let idcontato, nome, telefone, entrada

if (process.argv[2] == 'SELECT') {
  knex('contato').select().then(ret => {
    console.log(ret)
  })
  return
}

entrada = process.argv[3].split(',')

if (process.argv[2] == 'INSERT') {
  console.log('insert')
  nome = entrada[0]
  telefone = entrada[1]  
  knex('contato').insert({nome, telefone}).then(ret => {
    console.log(`insert completed: nome ${nome}, telefone: ${telefone}`)
  })
  return
}

if (process.argv[2] == 'UPDATE') {
  console.log('update')
  idcontato = entrada[0]
  nome = entrada[1]
  telefone = entrada[2]  
  knex('contato').update({nome, telefone}).where({idcontato}).then(ret => {
    console.log(`update completed: nome ${nome}, telefone: ${telefone}`)
  })
  return
}

if (process.argv[2] == 'DELETE') {
  console.log('delete')
  idcontato = entrada[0]
  knex('contato').where({idcontato}).del().then(ret => {
    console.log(`delete completed: ID ${idcontato}`)
  })
  return
}
