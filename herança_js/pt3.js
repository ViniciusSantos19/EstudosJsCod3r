const pai = { nome: 'Pedro', corDeCabelo: 'preto' }
const filha = Object.create(pai)
filha.nome = 'Maria'
console.log(filha.corDeCabelo)

const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true }
})

console.log(filha2.nome)

filha2.nome = "Carla"

console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for (let key in filha2) {
  filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)
}

