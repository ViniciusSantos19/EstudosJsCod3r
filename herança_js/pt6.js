function aula(nome, videoId) {
  this.nome = nome
  this.videoId = videoId
}

const aula1 = new aula("java", 12)
const aula2 = new aula("sistemas operecionais", 1)
console.log(aula1, aula2)

function novo(f, ...params) {
  const obj = {}
  Object.setPrototypeOf(obj, f.prototype)
  f.apply(obj, params);
  return obj
}

const aula3 = novo(aula, "Php", 13)
console.log(aula1, aula2, aula3)
