console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
  return this.split('').reverse().join('')
}

const teste = "Vinicius"

console.log(teste.reverse())


