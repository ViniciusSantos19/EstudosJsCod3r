function real(partes, ...valores) {
  const resultado = []

  valores.forEach((element, index) => {
    element = isNaN(element) ? element : `R$${element.toFixed(2)}`
    resultado.push(partes[index], element)
  });
  return resultado.join('')
}


const preco = 29.99
const precoParcela = 11


console.log(real`O preco do produto é ${preco}, ou em 3x de valor parcelado é ${precoParcela}`)
