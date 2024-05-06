const arredondarNota = (nota) => {
  if (nota < 38) {
    return nota
  } else {
    let resto = nota % 5

    if (resto >= 3) {
      return nota + (5 - resto)
    }
    return nota
  }


}

const verificaAprovacao = (nota) => {
  const notaFinal = arredondarNota(nota)

  if (notaFinal < 40) {
    return `Reprovador com ${notaFinal} de nota final`
  } else {
    return `Aprovado com ${notaFinal} de nota final`
  }
}


console.log(verificaAprovacao(83))
