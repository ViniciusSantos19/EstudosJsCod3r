function Pessoa(nome) {
  this.nome = nome

  this.falar = function() {
    console.log(`O meu nome é ${this.nome}`)
  }
}
