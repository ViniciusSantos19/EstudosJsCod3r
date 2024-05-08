const filtrarPorQuantidadeDeDigitos = (array, qntdDigitos) =>
 array.filter((item) => {
  return item.toString().length === qntdDigitos 
})


const arrayTeste = [1,2, 33, 44, 100]

console.log(filtrarPorQuantidadeDeDigitos(arrayTeste, 2))
