const fs = require('fs');
const path = require('path');

const getTurma = (letra) => {
  const filePath = path.join(__dirname, 'jsons', `turma${letra}.json`);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      }
    });
  });
};
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  .then(turmas => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomes => console.log(nomes)).catch(erro => console.error(erro))

module.exports = getTurma
