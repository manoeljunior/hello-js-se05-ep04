const {knex} = require('./config')

exports.select = () => {
  knex('contato').select().then(ret => {
    console.log(ret)
  })
}

exports.insert = (nome, telefone) => {
  knex('contato').insert({nome, telefone}).then(ret => {
    console.log(`insert completed: nome ${nome}, telefone: ${telefone}`)
  })
}

exports.update = (idcontato, nome, telefone) => {
  knex('contato').update({nome, telefone}).where({idcontato}).then(ret => {
    console.log(`update completed: nome ${nome}, telefone: ${telefone}`)
  })
}

exports.del = (idcontato) => {
  knex('contato').where({idcontato}).del().then(ret => {
    console.log(`delete completed: ID ${idcontato}`)
  })
}

