const dobrar = value => new Promise(resolve => resolve(value * 2))

const adicionarDez = value => new Promise(resolve => resolve(value + 10))

const multiplicarPorTres = value => new Promise(resolve => resolve(value * 3))


const valor = 10

dobrar(valor).then(adicionarDez).then(multiplicarPorTres).then(result => console.log(result))
