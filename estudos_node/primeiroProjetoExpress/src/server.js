const express = require('express')

const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000

const bd = require('./bancoDeDadosEmMemoria')

app.get('/Produtos', (req, res, next) => {
  console.log('Dentro do middleware1 ...')
  next()
})

console.log('Testando o lsp no helix')

const minhaVar = {}
minhaVar.nome = 'Variável1'
minhaVar.tamanho = 12

console.log(minhaVar)

app.get('/Produtos', (req, res, next) => {
  res.send(bd.getAllProdutos())
})


app.get('/Produtos/:id', (req, res) => {
  res.send(bd.getProdutoById(req.params.id))
})

app.post('/Produtos', (req, res) => {
  const produto = bd.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
    desc: req.body.desc
  })
  res.send(produto)
})

app.put('/Produtos/:id', (req, res) => {
  const produto = bd.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
    desc: req.body.desc
  })
  res.send(produto)
})

app.delete('/Produtos/:id', (req, res) => {
  const produto = bd.deleteProduto(req.params.id)
  res.send(produto)
})



app.listen(port, () => {
  console.log(`O servidor iniciou na porta ${port}`)
})
