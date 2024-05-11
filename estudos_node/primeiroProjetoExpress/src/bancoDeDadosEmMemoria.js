const sequecia = {
  _id: 1,
  get id() {
    return this._id++
  }
}

const produtos = {}

function salvarProduto(produto) {
  if (!produto.id) produto.id = sequecia.id
  produtos[produto.id] = produto
  return produto
}

function getProdutoById(id) {
  return produtos[id] || {}
}

function getAllProdutos() {
  return Object.values(produtos)
}

function deleteProduto(id) {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

module.exports = {
  salvarProduto, getProdutoById, getAllProdutos, deleteProduto
}
