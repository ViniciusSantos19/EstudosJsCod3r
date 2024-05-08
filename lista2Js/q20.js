const menorNumeroDoArray = meuArray => {
  meuArray.sort()
  const menorNumero = meuArray[0]
  return menorNumero
}

const arrayTeste = [2,-1,3,4,5,10]

console.log(menorNumeroDoArray(arrayTeste))
