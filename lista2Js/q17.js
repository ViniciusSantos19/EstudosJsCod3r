const despesasTotais = compras => {
  return compras.map((item) => {
    return item.preco
  }).reduce((previous, current) => {
   return previous + current 
  })
}

const listaDeCompras = [
  {nome: 'Feijão', preco: 20},
  {nome: 'arroz', preco: 60},
  {nome: 'frando', preco: 23.60}
]

console.log(despesasTotais(listaDeCompras))
