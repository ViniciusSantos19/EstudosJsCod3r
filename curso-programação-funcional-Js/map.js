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

const dobraIdade = (pessoa) => {
  return {
    nome: pessoa.nome,
    idade: pessoa.idade * 2
  }
}

const pegaNomes = (pessoa) => pessoa.nome
const pegaIdades = (pessoa) => pessoa.idade


console.log(pessoas.map(pegaNomes))
console.log(pessoas.map(pegaIdades))
const novasIdades = pessoas.map(dobraIdade)
console.log(novasIdades)

const filtro = (pessoa) => pessoa.idade < 100
const idadeFiltrada = novasIdades.filter(filtro)
console.log(idadeFiltrada)
