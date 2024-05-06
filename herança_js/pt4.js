function meuObjeto() {

}

console.log(meuObjeto.prototype)

const meuObjeto1 = new meuObjeto
const meuObjeto2 = new meuObjeto
const meuObjeto3 = {}
meuObjeto3.__proto__ = meuObjeto.prototype

console.log(Object.getPrototypeOf(meuObjeto1))

console.log(meuObjeto1.__proto__ === meuObjeto2.__proto__)
console.log(meuObjeto.prototype === meuObjeto1.__proto__)

meuObjeto.prototype.nome = 'Anonimo'
meuObjeto.prototype.falar = function() {
  console.log(`Bom dia, meu nome é ${this.nome}`)
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    return `${this.firstName} ${this.lastName}` // this não funcionará aqui 
  }
};

const person2 = {
  firstName: 'Joao',
  lastName: 'Silva',
  fullName: () => {
    return `${this.firstName} ${this.lastName}` // this não funcionará aqui 
  }
};

console.log(person2.fullName())

console.log(person.fullName())
meuObjeto1.falar()
meuObjeto2.falar()
meuObjeto3.falar()
