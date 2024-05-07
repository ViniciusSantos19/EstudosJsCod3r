const arrayDeObjetos = [
  { nome: "Produto 1", preco: 20.50, fragil: true },
  { nome: "Produto 2", preco: 15.75, fragil: false },
  { nome: "Produto 3", preco: 30.20, fragil: true },
  { nome: "Produto 4", preco: 25.99, fragil: false },
  { nome: "Produto 5", preco: 12.50, fragil: true },
  { nome: "Produto 6", preco: 18.80, fragil: false },
  { nome: "Produto 7", preco: 22.35, fragil: true },
  { nome: "Produto 8", preco: 28.90, fragil: false },
  { nome: "Produto 9", preco: 35.60, fragil: true },
  { nome: "Produto 10", preco: 40.00, fragil: false },
  { nome: "Produto 11", preco: 32.75, fragil: true },
  { nome: "Produto 12", preco: 17.30, fragil: false },
  { nome: "Produto 13", preco: 29.99, fragil: true },
  { nome: "Produto 14", preco: 24.50, fragil: false },
  { nome: "Produto 15", preco: 19.90, fragil: true }
];


console.log(arrayDeObjetos);

const produtosNaoFrageis = arrayDeObjetos.filter((item) => {
  return !item.fragil
})

console.log(produtosNaoFrageis)

