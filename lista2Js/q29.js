const receberMelhorEstudante = estudantes => {
  const estudantesComMedia = estudantes.map((item) => {
    const somaNotas = item.notas.reduce((previous, current) => {
      return current + previous
    })
    return { nome: item.nome, media: somaNotas / item.notas.length }
  }).sort((previous, current) => previous.media - current.media);
  console.log(estudantesComMedia)
  return estudantesComMedia[estudantesComMedia.length - 1]
}

const estudantes = [
  { nome: "João", notas: [8, 9, 7] },
  { nome: "Maria", notas: [7, 6, 8] },
  { nome: "Pedro", notas: [9, 8, 10] }
]

console.log(receberMelhorEstudante(estudantes))
