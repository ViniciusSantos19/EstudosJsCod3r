const repetir = (repeticao, numero) => {
  const novoArray = []

  for (let index = 0; index < numero; index++) {
    novoArray[index] = repeticao
  }
  return novoArray
}

console.log(repetir('jorge', 5))
console.log(repetir(9, 12))
