const produtos = [
  '{"nome": "Produto 1", "preco": 10.99}',
  '{"nome": "Produto 2", "preco": 20.49}',
  '{"nome": "Produto 3", "preco": 15.75}',
  '{"nome": "Produto 4", "preco": 30.20}',
  '{"nome": "Produto 5", "preco": 25.99}',
  '{"nome": "Produto 6", "preco": 12.50}',
  '{"nome": "Produto 7", "preco": 18.80}',
  '{"nome": "Produto 8", "preco": 22.35}',
  '{"nome": "Produto 9", "preco": 28.90}',
  '{"nome": "Produto 10", "preco": 35.60}'
];

const transformaEmObjeto = json => {
  const objeto = JSON.parse(json)
  return objeto
}

const pegaPreco = produto => {
  return produto.preco
}

const precos = produtos.map(transformaEmObjeto).map(pegaPreco)
const precoTotal = precos.reduce((previous, current) => {
 return previous + current 
}, 0)
console.log(precos)
console.log(precoTotal)
