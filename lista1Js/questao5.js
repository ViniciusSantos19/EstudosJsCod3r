const formataMoeda = (valor) => {
  if (typeof valor != "number") {
    return "Valor inválido"
  }


  valor = valor.toFixed(2)

  valor.replace('.', ',');

  valor = `R$ ${valor}`

  return valor

}


console.log(formataMoeda(0.899991))
