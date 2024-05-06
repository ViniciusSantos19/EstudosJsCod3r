function bomDia() {
  console.log('Boa dia')
}

function boaTarde() {
  console.log('Boa tarde')
}

function testeFuncao(fn) {
  if (typeof fn === 'function') {
    fn()
  }
}

function potencia(base, expoente) {
  return Math.pow(base, expoente)
}

function potenciaFunc(base) {
  return function(expoente) {
    return Math.pow(base, expoente)
  }
}

const potenciaDe2 = potenciaFunc(2)
console.log(potenciaDe2(8))

const result = potencia(128, 2)
console.log(result)

testeFuncao(bomDia)
testeFuncao(boaTarde)
