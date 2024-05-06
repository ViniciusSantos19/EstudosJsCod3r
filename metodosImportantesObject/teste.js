const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 60,
  altura: 1.60
}

function calcularImc() {
  return this.peso / (this.altura * this.altura);
}



console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`A chave é ${chave} \n o valor é ${valor}`)
});

Object.defineProperty(pessoa, 'dataDeNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2001'
})

console.log(pessoa)

const dest = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 4 }
const obj3 = Object.assign(dest, obj1, obj2)
console.log(dest)
console.log(obj3)
