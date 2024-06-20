const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const clienteRouter = require('./routes/clienteRouter');
const produtoRouter = require('./routes/produtoRouter');

dotenv.config();

app.get('/', (req, res) => {
    res.send('Seja bem vindo ao desafio back-end!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/cliente', clienteRouter); // +
app.use('/produto', produtoRouter);

app.use((req, res) => {
    res.status(404).send('Página não encontrada');
});

module.exports = app;

