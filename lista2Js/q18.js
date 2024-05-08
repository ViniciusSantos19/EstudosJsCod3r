const calcularMediaSimples = meuArray => {
  const valorTotal = meuArray.reduce((previous, current) => {
   return previous + current 
  })

  return valorTotal / meuArray.length
}

const arrayTeste = [1,2,3,4,5,6,7]

console.log(calcularMediaSimples(arrayTeste))
