function calcular(num) {
  return function(num2) {
    return num + num2
  }
}

const soma5 = calcular(2)
console.log(soma5(5))

function somar(num1, num2) {
  return num1 + num2
}

function subtrair(num1, num2) {
  return num1 - num2
}

function calculadora(num1, num2, fn) {
  if (typeof fn === 'function') {
    console.log(fn(num1, num2))
  }
}

function somaABC(a) {
  return function(b) {
    return function(c) {
      console.log(a)
      console.log(b)
      console.log(c)
      return a + b + c
    }
  }
}

calculadora(5, 6, somar)
calculadora(4, 3, subtrair)

const somaA = somaABC(2)
const somaAb = somaA(3)

console.log(somaAb(5))
