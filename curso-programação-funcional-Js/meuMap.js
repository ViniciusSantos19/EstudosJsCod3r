Array.prototype.meuMap = function (fn) {
  const mapped = []
 for (let i = 0; i  < this.length; i++) {
  const resultado = fn(this[i], i, this)
    mapped.push(resultado)
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

const pegaNomes = (pessoa) => pessoa.nome
const pegaIdades = (pessoa) => pessoa.idade

const arrayNomes = pessoas.meuMap(pegaNomes)

console.log(arrayNomes)
