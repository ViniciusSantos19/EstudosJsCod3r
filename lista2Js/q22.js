const contarPalavras = string => {
  const arrayDePalavras = string.split(' ');
  return arrayDePalavras.length
}

const minhaString = 'Olá mundo meu nome é vinicius'

console.log(contarPalavras(minhaString))
