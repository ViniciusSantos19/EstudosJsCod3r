const converteStringEmArrayNumeral = (listaDePontos) => {
  const arrayNumeros = listaDePontos.split(" ").map(Number)
  return arrayNumeros
}


const progessoBasquete = (listaDePontos) => {

  const arrayPontos = converteStringEmArrayNumeral(listaDePontos)


  let maiorPontosAtual = arrayPontos[0]
  let vezesDeQuebraDeRecord = 0
  let piorPartida = 0

  for (let i = 1; i < arrayPontos.length; i++) {
    const pontuacaoAutal = arrayPontos[i]

    if (maiorPontosAtual > pontuacaoAutal) {
      maiorPontosAtual = pontuacaoAutal
      vezesDeQuebraDeRecord++
      console.log(vezesDeQuebraDeRecord)
    }

    if (pontuacaoAutal < piorPartida) {
      piorPartida = pontuacaoAutal
    }
  }

  return [vezesDeQuebraDeRecord, arrayPontos.indexOf(piorPartida)]

}

console.log(progessoBasquete("10 20 20 8 25 3 0 30 1"))
