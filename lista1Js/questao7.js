const caldDelta = (a, b, c) => {
  return b ** 2 - 4 * a * c
}

const bhaskara = (a, b, c) => {
  if (a === 0) {
    return 'Coeficiente a deve ser diferente de zero';
  }

  const delta = caldDelta(a, b, c)

  if (delta < 0) {
    return "O delta é negativo"
  }

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  return [x1, x2]
}

console.log(bhaskara(3, -5, 12))

console.log(bhaskara(3, -5, 2))


