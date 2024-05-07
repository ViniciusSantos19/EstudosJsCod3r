const aprovados = ['paula', 'nelson', 'vinicius', 'geraldo', 'victor']

aprovados.forEach(element => {
  console.log(`O aprovado foi ${element}`)
});

aprovados.forEach(function (pessoa, indice) {
  console.log(`O aprovado do índice ${indice} foi a pessoa ${pessoa}`)
})

const exibirAprovados = (aprovado, indice) => console.log(` aprovado com indice arrow function ${aprovado}, ${indice}`)

aprovados.forEach(exibirAprovados)
