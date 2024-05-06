const sequencia = {
  _valor: 1,
  get valor() { return this._valor++ },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor
    }
  }
}
const valorAtual = sequencia.valor
console.log(valorAtual)
sequencia.valor = 5
console.log(sequencia.valor)
