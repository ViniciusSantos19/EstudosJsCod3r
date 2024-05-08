const objetoParaArray = objeto => {
  const novoArray = Object.entries(objeto)
  return novoArray
}

const pessoa = {
  nome: 'Vinicius',
  idade: 22,
  emCasa: true,
  trabalhando: false
}

console.log(objetoParaArray(pessoa))
