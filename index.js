const contatos = require('./contatos')
let idcontato, nome, telefone, entrada

if (process.argv.length < 3) {
  return console.log('Too many arguments!!!')
}

if (process.argv[2] == 'SELECT') {
  contatos.select()
  return
}

entrada = process.argv[3].split(',')

if (process.argv[2] == 'INSERT') {
  console.log('insert')
  nome = entrada[0]
  telefone = entrada[1]
  contatos.insert(nome, telefone)
  return
}

if (process.argv[2] == 'UPDATE') {
  console.log('update')
  idcontato = entrada[0]
  nome = entrada[1]
  telefone = entrada[2]
  contatos.update(idcontato, nome, telefone)
  return
}

if (process.argv[2] == 'DELETE') {
  console.log('delete')
  idcontato = entrada[0]
  contatos.del(idcontato)
  return
} else {
  console.log('invalid parameter')
}
