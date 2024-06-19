const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController.js');
const {validarCliente} = require('../middlewares/clienteMiddleware.js');

router
    .get('/', clienteController.buscarTodos)
    .post('/', validarCliente, clienteController.salvar)
    .put('/:id', validarCliente, clienteController.atualizar)
    .delete('/:id', clienteController.remover);

module.exports = router;