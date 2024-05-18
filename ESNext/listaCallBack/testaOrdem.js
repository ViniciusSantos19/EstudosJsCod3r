const soma2 = num => num + 2
const multimplica2 = num => num * 2

const testaOrdem = multimplica2(soma2(2))

const testaOrdem2 = soma2(multimplica2(2))

console.log(testaOrdem)

console.log(testaOrdem2)
