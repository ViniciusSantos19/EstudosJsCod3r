const removerVogais = palavra => {
  const vogais = ['a','e','i','o', 'u']
  const arrayDeChar = palavra.split('')

  return arrayDeChar.filter((item) => {
    return !vogais.includes(item)
  }).join('')

}

const removerVogaisRegex = palavra => {
  return palavra.replace(/[aeiou]/ig, '');
}

console.log(removerVogais('vini'))
console.log(removerVogaisRegex('exemplo'))
