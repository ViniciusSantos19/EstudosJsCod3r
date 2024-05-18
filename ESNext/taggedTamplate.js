function taggedTemplate(paramentro, ...palavras) {
  console.log(paramentro)
  console.log(palavras)
  return 'Outra String'
}


const aluno = 'Gui'
const situacao = 'aprovado'

console.log(taggedTemplate`O aluno ${aluno} esta na situacao de ${situacao}`)
