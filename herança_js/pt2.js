const avo = { atributo1: 'A' }
const pai = { __proto__: avo, atributo2: 'B' }
const filho = { __proto__: pai, atributo3: 'C' }
console.log(filho.atributo1)

const carro = {
  veloAtual: 0,
  veloMaxima: 200,
  acelerarMais(delta) {
    if (this.veloAtual + delta <= this.veloMaxima) {
      this.veloAtual += delta
      return
    }
    this.veloAtual = this.veloMaxima
  },
  status() {
    return `${this.veloAtual}Km/h ${this.veloMaxima}Km/h`
  }
}

const ferrari = {
  modelo: 'f40',
  veloMaxima: 320,
}

const volvo = {
  modelo: 'v40',
  status() {
    return `${this.modelo}, ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerarMais(50)
console.log(ferrari.status())
console.log(volvo.status())
