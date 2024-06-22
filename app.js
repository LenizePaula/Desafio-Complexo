const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const clienteRouter = require('./routes/clienteRouter'); // Certifique-se de que o arquivo de rota esteja correto
const produtoRouter = require('./routes/produtoRouter'); // Certifique-se de que o arquivo de rota esteja correto

dotenv.config();

app.get('/', (req, res) => {
    res.send('Seja bem vindo ao desafio back-end!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas principais
app.use('/cliente', clienteRouter); // Rota cliente
app.use('/produto', produtoRouter); // Rota produto
app.use('/login', loginRouter);     // Rota de login
app.use('/logout', logoutRouter);   // Rota de logout

// Middleware para lidar com rotas não encontradas
app.use((req, res) => {
    res.status(404).send('Página não encontrada');
});

module.exports = app;



