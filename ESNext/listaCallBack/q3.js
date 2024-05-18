const dobrarOsChar = str => str
  .split("")
  .map(c => `${c}${c}`)
  .join("")



console.log(dobrarOsChar("p"))

console.log(dobrarOsChar("vinicius"))
