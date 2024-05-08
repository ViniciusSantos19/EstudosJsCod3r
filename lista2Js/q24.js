const buscarPalavrasSemelhantes = (palavra, arrayString) => {
  const palavrasAchadas = []
  arrayString.forEach(element => {
    if (element.includes(palavra)) {
      palavrasAchadas.push(element)
    }
  });
  return palavrasAchadas
}

const meuArray = ['profissão', 'professor', 'álvaro', 'i want it everywhere']

console.log(buscarPalavrasSemelhantes('pro', meuArray))
