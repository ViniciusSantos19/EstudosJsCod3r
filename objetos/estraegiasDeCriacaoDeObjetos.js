// Notacao literal

const novoObjeto = {
  nome: "Vinicius",
  idade: 22
}

console.log(novoObjeto)

// Criando com object

const objetoObject = new Object()
objetoObject.valor = 222
console.log(objetoObject)

// Funcoes contrutoras

function Produto(nome, preco, desc) {
  this.nome = nome
  this.preco = preco
  this.desc = desc
  this.getPreco = () => {
    return this.preco
  }
  this.getPrecoComDesconto = () => {
    return this.preco - (this.preco * this.desc)
  }
}

const produto = new Produto("Celucar", 3000, 0.12)
console.log(produto)
const valorProdutoComDesc = produto.getPrecoComDesconto()
console.log(valorProdutoComDesc)

// Funcao factory

function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome: nome,
    salarioBase: salarioBase,
    faltas: faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const funcionario = criarFuncionario("Paulo", 3000, 12)
const salrio = funcionario.getSalario()
console.log(funcionario)
console.log(salrio)

