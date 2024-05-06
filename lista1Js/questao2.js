const verificaTriangulo = (l1, l2, l3) => {
  if (l1 === l2 && l1 === l3) {
    return "Triangulo equilátero"
  }

  if (l1 !== l2 && l1 !== l3 && l2 !== l3) {
    return "Triangulo escaleno"
  }

  if (l1 === l2 || l1 === l3 || l2 === l3) {
    return "Triangulo isóceles"
  }

}

console.log(verificaTriangulo(1, 1, 1))
console.log(verificaTriangulo(1, 2, 3))
console.log(verificaTriangulo(1, 2, 2))
