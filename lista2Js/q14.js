const valoresParesEmIndicesPares = meuArray => {
  const novoArray = []
  for (let index = 0; index < meuArray.length; index++) {
   if (meuArray[index] % 2 === 0 && index % 2 === 0) {
    novoArray.push(meuArray[index])
    } 
  }
  return novoArray
}


const array  = [2,1,3,4,5,6,7,8,9]

console.log(valoresParesEmIndicesPares(array))
