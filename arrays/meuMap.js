Array.prototype.meuMap = function(callback) {
  const mapa = []
  for (let index = 0; index < this.length; index++) {
    let resultado = callback(this[index], index, this)
    mapa.push(resultado);
  }
  return mapa
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


const pessoaComIdadeDobrada = pessoas.meuMap(function(pessoa) {
  return { nome: pessoa.nome, idade: pessoa.idade * 2 }
})

console.log(pessoaComIdadeDobrada)
