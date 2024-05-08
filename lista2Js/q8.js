const multiplicar = (num1, num2) => {
  if (num1 >= 0 && num2 >= 0) {
    var multiplicacao = 0
    for (let i = 0; i < num2; i++) {
      multiplicacao += num1
    }
    return multiplicacao
  }
  return 0
}
console.log(multiplicar(5, 5))
