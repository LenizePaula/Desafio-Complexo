const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const { validarCliente } = require('../middleware/clienteMiddleware');
const cacheMiddleware = require('../middleware/cacheMiddleware');

router
    .get('/', cacheMiddleware, clienteController.buscarTodos)
    .post('/', validarCliente, clienteController.salvar)
    .put('/:id', validarCliente, clienteController.atualizar)
    .delete('/:id', clienteController.remover);

module.exports = router;

