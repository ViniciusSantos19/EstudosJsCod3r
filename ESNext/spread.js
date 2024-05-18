const funcionario = { nome: 'Maria', salario: 4000 }
const clone = { ativo: true, ...funcionario }

console.log(funcionario)

console.log(clone)


const grupoA = ['Maria', 'Marco', 'João']
const grupoB = ['Jeferson', ...grupoA]

console.log(grupoA)
console.log(grupoB)
