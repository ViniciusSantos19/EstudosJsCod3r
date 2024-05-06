import express from 'express';
import { userController } from './controllers/UserController';
import { startConnection } from './typeorm';

// Crie uma nova instância do aplicativo Express
const app = express();
startConnection().then(() => {
  console.log("conectado ao banco de dados com sucesso")
}).catch((error: Error) => {
  console.log(error)
})

// Use o middleware express.json() para analisar o corpo das solicitações como JSON
app.use(express.json());

// Configure as rotas
app.post('/users', (req, res) => userController.createUser(req, res));
app.get('/users', (req, res) => userController.getAllUser(req, res));
app.post('/login', (req, res) => userController.loginUser(req, res))

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

