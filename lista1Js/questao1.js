const soma = (num1, num2) => {
  return num1 + num2
}

const subtracao = (num1, num2) => {
  return num1 - num2
}

const divisao = (num1, num2) => {
  return num1 / num2
}

const multiplicacao = (num1, num2) => {
  return num1 * num2
}


const mostraOperacoes = (num1, num2) => {
  console.log(soma(num1, num2))
  console.log(subtracao(num1, num2))
  console.log(divisao(num1, num2))
  console.log(multiplicacao(num1, num2))
}


mostraOperacoes(2, 2)
