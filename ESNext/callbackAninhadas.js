const fs = require('fs');
const path = require('path');

const getTurma = (letra, callback) => {
  const filePath = path.join(__dirname, 'jsons', `turma${letra}.json`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      callback(jsonData);
    } catch (parseErr) {
      console.error('Erro ao analisar o JSON:', parseErr);
    }
  });
};

let nomes = []

getTurma('A', alunos => {
  nomes = alunos.map(aluno => `A: ${aluno.nome}`)
  console.log(nomes)
  getTurma('B', alunos => {
    nomes = alunos.map(aluno => `B: ${aluno.nome}`)
    console.log(nomes)
  })
  getTurma('C', alunos => {
    nomes = alunos.map(aluno => `C: ${aluno.nome}`)
    console.log(nomes)
  })
})

