const jurosSimples = (capitalInicial, taxaDeJuros, tempo) => {
  if (typeof capitalInicial !== 'number' || typeof taxaDeJuros !== 'number' || typeof tempo !== 'number') {
    return 'Erro: Parâmetros inválidos (devem ser números)'
  }

  const juros = capitalInicial * taxaDeJuros * tempo

  return juros.toFixed(2)
}


const jurosCompostos = (capitalInicial, taxaDeJuros, tempo) => {
  if (typeof capitalInicial !== 'number' || typeof taxaDeJuros !== 'number' || typeof tempo !== 'number') {
    return 'Erro: Parâmetros inválidos (devem ser números)'
  }

  const taxaPeriodica = taxaDeJuros / 12

  const montanteFinal = capitalInicial * Math.pow(1 + taxaPeriodica, tempo * 12)

  const jurosCompostos = montanteFinal - capitalInicial

  return jurosCompostos.toFixed(2)

}

console.log(jurosSimples(10000, 0.10, 5))

console.log(jurosCompostos(10000, 0.10, 5))

// O tempo nesse caso seria anos
