Array.prototype.meuReduce = function(callback, valorInicial) {
  let acumulador = valorInicial !== undefined ? valorInicial : this[0];
  const indiceInicial = valorInicial !== undefined ? 0 : 1;

  for (let index = indiceInicial; index < this.length; index++) {
    acumulador = callback(acumulador, this[index], index, this);
  }

  return acumulador;
}


const arrayDeObjetos = [
  { nome: "Aluno 1", nota: 7.5, bolsista: true },
  { nome: "Aluno 2", nota: 9.2, bolsista: false },
  { nome: "Aluno 3", nota: 5.8, bolsista: true },
  { nome: "Aluno 4", nota: 6.3, bolsista: false },
  { nome: "Aluno 5", nota: 8.1, bolsista: true },
  { nome: "Aluno 6", nota: 4.7, bolsista: false },
  { nome: "Aluno 7", nota: 7.9, bolsista: true },
  { nome: "Aluno 8", nota: 6.5, bolsista: false },
  { nome: "Aluno 9", nota: 9.0, bolsista: true },
  { nome: "Aluno 10", nota: 5.4, bolsista: false },
  { nome: "Aluno 11", nota: 7.2, bolsista: true },
  { nome: "Aluno 12", nota: 8.7, bolsista: false },
  { nome: "Aluno 13", nota: 6.9, bolsista: true },
  { nome: "Aluno 14", nota: 8.3, bolsista: false },
  { nome: "Aluno 15", nota: 5.6, bolsista: true }
];
const soma =  (anterior, atual) => anterior + atual
const total = arrayDeObjetos.map(aluno => aluno.nota).meuReduce(soma)
console.log(total)

