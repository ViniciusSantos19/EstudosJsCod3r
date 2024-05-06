const ferrari = {
  modelo: 'f40',
  velocidadeMaxima: 320
}

const volvo = {
  modelo: 'v40',
  velocidadeMaxima: 220
}

const carro = {
  placa: 'abc',
  seguro: 111
}

volvo.__proto__ = carro

console.log(ferrari.__proto__ == Object.prototype)

Object.setPrototypeOf(ferrari, carro)

console.log(Object.getPrototypeOf(ferrari))
console.log(Object.getPrototypeOf(volvo))
console.log(ferrari)
