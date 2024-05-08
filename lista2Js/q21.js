const funcaoDaSorte = numero => {
  if (numero < 1 || numero > 10) {
    return '{Erro: "numero muito grande!"}'
  }

  const numeroSorteado = Math.floor(Math.random() * 10) + 1

  if (numero === numeroSorteado) {
    return 'Parabens você foi sorteado!'
  }
  return 'Mais sorte na próxima! Você não foi sorteado'
}

console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(1))

