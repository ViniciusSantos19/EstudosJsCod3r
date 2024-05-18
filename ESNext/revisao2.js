const funcaoSoma = (...numeros) => {
  return numeros.reduce((anterior, proximo) => {
    return anterior + proximo
  })
}

console.log(funcaoSoma(1,2,3))

// mostrando o this
const texto = () => console.log(this ===  module.exports)

texto()



