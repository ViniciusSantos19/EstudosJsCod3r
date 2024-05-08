const primeiroEUltimoElemento = meuArrat => {
  const novoArray = []
  novoArray.push(meuArrat[0])
  novoArray.push(meuArrat[meuArrat.length - 1])
  return novoArray
}

const meuArray = [1,2,3,4,5]

console.log(primeiroEUltimoElemento(meuArray))
