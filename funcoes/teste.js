calculadora = {

  soma: (num1, num2) => {
    return num1 + num2
  },

  subtracao: (num1, num2) => {
    return num1 > num2 ? num1 - num2 : num2 - num1

  },

  divisao: (num1, num2) => {
    if (isZero(num2) || isZero(num1)) {
      return
    }
    return num1 > num2 ? num1 / num2 : num2 / num1
  },

  multiplicacao: (num1, num2) => {
    return num1 * num2
  },

  isZero: (num) => {
    return num == 0
  }

}

let soma = calculadora.subtracao(3, 2)
console.log(soma)
