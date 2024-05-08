const segundoMaior = meuArray => {
  const meuArrayOrdenado = meuArray.sort((a, b) => a - b)
  return meuArrayOrdenado[meuArray.length - 2]
}

const meuArrayTeste = [1,2,66,-1, 9]

console.log(segundoMaior(meuArrayTeste))
