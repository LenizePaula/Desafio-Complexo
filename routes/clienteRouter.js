const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const { validarCliente } = require('../middleware/clienteMiddleware');
const cacheMiddleware = require('../middleware/cacheMiddleware');
const autenticarJWT = require('../middleware/authMiddleware'); // Middleware de autenticação JWT

router
    .get('/', autenticarJWT, cacheMiddleware, clienteController.buscarTodos)
    .post('/', autenticarJWT, validarCliente, clienteController.salvar)
    .put('/:id', autenticarJWT, validarCliente, clienteController.atualizar)
    .delete('/:id', autenticarJWT, clienteController.remover);

module.exports = router;


