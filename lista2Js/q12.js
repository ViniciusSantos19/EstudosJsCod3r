const filtrarNumeros = meuArray => {
  const novoArray = []
  for (let i = 0; i < meuArray.length; i++) {
    if (typeof meuArray[i] == 'number') {
      novoArray.push(meuArray[i])
    }
  }
  return novoArray
}

const arrayDoido = [1, 2, 'pessoa', 'data', 9]

console.log(filtrarNumeros(arrayDoido))
