function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: "Notebook",
  preco: 4500,
  desc: 0.15,
  getPreco
}

const carro = { preco: 45000, desc: 0.10 }
console.log(produto.getPreco())
console.log(getPreco.call(carro, 0.15, '$'))
console.log(getPreco.apply(carro, [0.10, '&']))
