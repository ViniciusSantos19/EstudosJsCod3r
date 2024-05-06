const soma = (a, b) => {
  return a + b
}

const saudacoes = nome => `fala ${nome}, beleza?`

const somaArray = (...numeros) => {
  let total = 0
  for (let n of numeros) {
    total += n
  }
  return total
}

Array.prototype.ultimo = function() {
  console.log(this[this.length - 1])
}
let nuemros = [1, 2, 3, 4];
console.log(soma(1, 4))
console.log(saudacoes("mário"))
console.log(somaArray(1, 2, 3, 4, 5, 6))
nuemros.ultimo()
