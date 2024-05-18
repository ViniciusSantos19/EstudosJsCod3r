{
  var a = 1
  let b = 2
  console.log(b)
}

console.log(a)

const produto = {
  nome: 'tablet',
  preco: 3000,
  desc: 0.15
}

function calcularPreco() {
  const desconto = this.preco * this.desc
  const precoFinal = this.preco - desconto
  return precoFinal
}


console.log(calcularPreco.call(produto))

// destructuring

const [l, n, ...tras] = 'Cod3r'

console.log(l, n, tras)

const [num1, num2] = [1,2,3]
console.log(num1, num2)

const {nome, idade:i} = {nome:'vinicius', idade:22}
console.log(nome, i)
