let a, b, c = 0
a = 1
b = 2
c = 3
const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }

console.log(obj1, obj2)

const nomeAtributo = "nota"
const valorAtributo = 5.9

const obj3 = {}
obj3[nomeAtributo] = valorAtributo

console.log(obj3)

const obj4 = { [nomeAtributo]: valorAtributo }

console.log(obj4)

const obj5 = {
  funcao1: function() {
    console.log('funcao 1')
  },
  funcao2: function() {
    console.log('funcao 2')
  },
  funcao3() {
    console.log('funcao 3')
  }

}

console.log(obj5)
