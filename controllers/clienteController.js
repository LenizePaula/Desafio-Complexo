const clienteService = require('../services/clienteService');
const cacheController = require('../controllers/cacheController');

const buscarTodos = async (req, res) => {
  try {
    const clientes = await clienteService.buscarTodos();
    if (clientes) {
      res.status(200).json(clientes);
    } else {
      res.status(400).json({ message: 'Erro ao buscar todos os clientes' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao buscar clientes' });
  }
};

const salvar = async (req, res) => {
  try {
    const result = await clienteService.salvar(req.body);
    if (result) {
      cacheController.removeFromCache('/cliente'); // Invalida o cache
      console.log('Cache invalidado após salvar cliente');
      res.status(201).json({ message: 'Cliente salvo com sucesso' });
    } else {
      res.status(400).json({ message: 'Erro ao salvar cliente' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno ao salvar cliente' });
  }
};

const atualizar = async (req, res) => {
  try {
    const novoBody = { ...req.body, id: Number(req.params.id) };
    const result = await clienteService.atualizar(novoBody);
    if (result) {
      cacheController.removeFromCache('/cliente'); // Invalida o cache
      console.log('Cache invalidado após atualizar cliente');
      res.status(200).json({ message: 'Cliente atualizado com sucesso' });
    } else {
      res.status(400).json({ message: 'Erro ao atualizar cliente' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno ao atualizar cliente' });
  }
};

const remover = async (req, res) => {
  try {
    const result = await clienteService.remover(req.params.id);
    if (result) {
      cacheController.removeFromCache('/cliente'); // Invalida o cache
      console.log('Cache invalidado após remover cliente');
      res.status(200).json({ message: 'Cliente removido com sucesso' });
    } else {
      res.status(400).json({ message: 'Erro ao remover cliente' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno ao remover cliente' });
  }
};

module.exports = {
  buscarTodos,
  salvar,
  atualizar,
  remover,
};
