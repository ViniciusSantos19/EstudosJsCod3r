const produto = Object.preventExtensions({
  nome: 'sabão',
  preco: 12.00,
  desc: 0.15
})

console.log(Object.isExtensible(produto))

const pessoa = {nome: 'Regis Tadeu'}

console.log(pessoa)

Object.seal(pessoa)

console.log(Object.isSealed(pessoa))

pessoa.nome = 'Pablo Peixoto'

console.log(pessoa)



