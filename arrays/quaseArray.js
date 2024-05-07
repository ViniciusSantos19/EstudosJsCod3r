const quaseArray = {0:'rafael', 1:'bia', 2:'laura', 3:'gerson'}

Object.defineProperty(quaseArray, 'toString', {
  value: function () {
    return Object.values(this)
  },
  enumerable:false
})

const meuArray = ['rafael', 'bia', 'laura', 'gerson']

console.log(quaseArray.toString())
console.log(meuArray)
