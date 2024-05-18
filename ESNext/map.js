const tecnologias = new Map()

tecnologias.set('react', { framework: true })
tecnologias.set('angular', { framework: true })
tecnologias.set('java', { framework: false })


console.log(tecnologias)

console.log(tecnologias.get('react').framework)


const chavesVariadas = new Map([
  [function() { }, 'funcao'],
  [{}, 'objeto'],
  [123, 'numero']
]
)

chavesVariadas.forEach((valor, chave) => {
  console.log(valor, chave)
});

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
