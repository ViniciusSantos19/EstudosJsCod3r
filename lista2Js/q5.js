const inverso = valor => {
  if (typeof valor === "boolean") {
    return !valor
  } else if (typeof valor == "string") {
    return 'O valor esperado é uma bool ou um number!'
  }
  return valor * -1
}

console.log((inverso(true)))
console.log((inverso(12)))
console.log(inverso('Teste'))

