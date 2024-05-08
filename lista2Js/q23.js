const contarCaracter = (caracter, minhaString) => {
  let contador = 0

  for (let i = 0; i < minhaString.length; i++) {
    if (minhaString[i] === caracter) {
      contador++
    }
  }
  return contador
}


const minhaString = 'Vinicius'

console.log(contarCaracter('i', minhaString))
