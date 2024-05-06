const calculadora = (num1, num2, operacao) => {
  switch (operacao) {
    case "+":
      return num1 + num2
      break;
    case "-":
      return num1 - num2
      break
    case "/":
      return num1 / num2
      break
    case "*":
      return num1 * num2
      break
    default:
      return "operacao inválida"
      break;
  }
}

console.log(calculadora(1, 3, "+"))
console.log(calculadora(5, 3, "-"))
console.log(calculadora(6, 3, "/"))
console.log(calculadora(3, 3, "*"))

