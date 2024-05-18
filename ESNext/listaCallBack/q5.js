const input = [
  {
    name: "John",
    yearOfBirth: 1988,
    placeOfBirth: "New York",
  },
  {
    name: "Nancy",
    yearOfBirth: 1963,
    placeOfBirth: "New York",
  },
  {
    name: "John",
    yearOfBirth: 1980,
    placeOfBirth: "Toronto",
  },
];

const isTorono = i => i.placeOfBirth === 'Toronto'

const groupBy = (array, callback) => {
  return array.reduce((acumulador, current) => {
    const chave = callback(current);
    if (acumulador[chave]) {
      acumulador[chave].push(current);
    } else {
      acumulador[chave] = [current]
      console.log(chave)
    }
    return acumulador
  }, {})
}


console.log(groupBy(input, (i) => i.placeOfBirth))

console.log(groupBy(input, isTorono))

console.log(groupBy(input, (i) => i.name))
