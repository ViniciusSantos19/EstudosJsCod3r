console.log(typeof Array, typeof new Array, typeof [])
console.log(typeof Object)

let aprovados = new Array('Ana', 'Bia', 'Paulo', 'Carlos')
console.log(aprovados)
console.log(aprovados[0])

const reprovados = ['Jeferson', 'Rui', 'Mateus', 'Julia']

console.log(reprovados)

reprovados[2] = 'Tales'

console.log(reprovados[2])

reprovados.push('Uriel')

console.log(reprovados.length)

const sumarioAprovados = aprovados.reduce((previous, current) => {
  return `Os aprovados são ${current}\n` + previous
}, '')

console.log(sumarioAprovados)


const segundoMaior = (array) => {
  array.sort()
  const segundoMaior = array[array.length - 2]
  return segundoMaior
}

const arrayNumero = [2, 1, 3, 4, 5, 1, 8]

console.log(segundoMaior(arrayNumero))

Array.prototype.segundoMaior = function() {
  // Ordena o array em ordem crescente
  this.sort((a, b) => a - b);

  // Retorna o segundo maior elemento
  return this[this.length - 2];
}
arrayNumero.push(11)
const segundoMaiorNumero = arrayNumero.segundoMaior()
console.log(segundoMaiorNumero)
