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


const todosSaoBolsistas = (anterior, atual) => anterior && atual.bolsista

const algumAlunoEhBolsista = (anterior, atual) => anterior.bolsista || atual.bolsista

const isTodosBolsistas = arrayDeObjetos.reduce(todosSaoBolsistas, true)
const isThereAlgumBolsista = arrayDeObjetos.reduce(algumAlunoEhBolsista, true)

console.log(isTodosBolsistas, isThereAlgumBolsista)
