const adiconaExclamacao = mensagem => `${mensagem}!`

let palabraComExclamacao = adiconaExclamacao(adiconaExclamacao('teste'))

console.log(palabraComExclamacao)
