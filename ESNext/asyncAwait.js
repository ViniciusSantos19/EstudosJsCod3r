const getTurma = require('./refazendoComPromises')

const obterAlunos = async () => {
  const turmarA = await getTurma('A')
  const turmaB = await getTurma('B')
  const turmaC = await getTurma('C')
  return [].concat(turmarA, turmaB, turmaC)
}
