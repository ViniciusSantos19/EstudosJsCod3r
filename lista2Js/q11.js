const copiaObjetoSemAtributo = (objeto, atributo) => {
 const novoObj = {...objeto}
  delete novoObj[atributo]
  return novoObj
}

const pessoa = {nome: 'paula',
  idade: 50,
  emCasa: false}

console.log(copiaObjetoSemAtributo(pessoa, 'emCasa'))
