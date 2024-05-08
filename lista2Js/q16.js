const somarArray = meuArray => {
  const resultado = meuArray.reduce((previous, current) => {
    return previous + current
  })
  return resultado
}

const meuArray = [1, 2, 3]
const meuOutroArray = [2,2]

console.log(somarArray(meuArray))
console.log(somarArray(meuOutroArray))
