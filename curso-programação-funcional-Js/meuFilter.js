Array.prototype.meuFilter = function(fn) {
  const mapped = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this) == true) {
      mapped.push(this[i])
    }
  }
  return mapped
}

const pessoas = [
  { nome: "Vinicius", idade: 22 },
  { nome: "Paula", idade: 53 },
  { nome: "Nelson", idade: 60 },
  { nome: "Ana", idade: 30 },
  { nome: "Carlos", idade: 45 },
  { nome: "Mariana", idade: 28 },
  { nome: "José", idade: 48 },
  { nome: "Rita", idade: 37 }
];

const filtraPorNome = (nome) => {
  return (pessoa) => pessoa.nome === nome
}

const resultado = pessoas.meuFilter(filtraPorNome("Ana"))
console.log(resultado)
