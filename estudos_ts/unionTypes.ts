type id = {
  identidicador: string | number
}

interface Id {
  identidicador: id
}
class IdClass implements Id {
  identidicador: id
  constructor(identidicador: id) {
    this.identidicador = identidicador
  }
}

const criaId = (id: id) => {
  return new IdClass(id)
}

console.log(criaId({ identidicador: 12 }))
console.log(criaId({ identidicador: "Teste de tipo" }))


