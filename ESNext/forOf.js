const meuMap = new Map([
  ["pessoa1", 'paulo'],
  ["pessoa2", 'jeferson']
])

for (const objeto of meuMap) {
  console.log(objeto)
}


for (const chave of meuMap.keys()) {
  console.log(chave)
}


for (const valor of meuMap.values()) {
  console.log(valor)
}

for (const [chave, valor] of meuMap.entries()) {
  console.log(chave, valor)
}


const s = new Set(['a', 'b', 'c'])

for (const valor of s) {
  console.log(valor)
}
