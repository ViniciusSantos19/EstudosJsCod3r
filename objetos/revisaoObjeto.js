const produto = new Object()
produto.name = "Notebook"
produto.preco = 4500

const novoProduto = { ...produto }

novoProduto.preco = 1200

console.log(produto)
console.log(novoProduto)

const carro = {
  marca: "Ford",
  placa: "abc123",
  modelo: "Ford ka",
  preco: 40000,
  proprietário: {
    nome: "Paulo",
    sobrenome: "Mattos",
    carteiraDeAbilitação: "12222",
    endereco: {
      cep: "419000295",
      rua: "Avenida Amaralina",
      bairro: "Amaralilna",
      cidade: "Salvador",
      estado: "Bahia"
    }
  },
  condurotes: [{
    nome: "Jessica",
    idade: 20
  },
  {
    nome: "Jerferson",
    idade: 40
  }],
  calcularValorDoSeguro: function() {
    const valorSeguro = this.preco * 0.15
    return valorSeguro
  }
}

const nomeCondutores = []
carro.condurotes.forEach(element => {
  nomeCondutores.push(element.nome)
});
console.log(nomeCondutores)

var estadoDoProprietarioDoCarro = carro["proprietário"]["endereco"]["estado"]
console.log(estadoDoProprietarioDoCarro)

console.log(carro)
const valorDoSeguro = carro.calcularValorDoSeguro()
console.log(valorDoSeguro)

const novoCarro = Object.assign({}, carro)
const novoCarroComSpread = { ...carro }
carro["marca"] = "Tesla"
novoCarro.placa = "ykz987"
console.log(novoCarro)
console.log(novoCarroComSpread)
