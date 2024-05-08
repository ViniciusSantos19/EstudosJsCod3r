const simboloMais = numero => {
  let mais = ''
  for (let index = 0; index < numero; index++) {
    mais +='+'
  }
  return mais
}

console.log(simboloMais(3))
