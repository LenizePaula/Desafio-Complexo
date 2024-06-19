const produtoService = require('../services/produtoService');

const buscarTodos = async (req, res) => {
  try {
    const produtos = await produtoService.buscarTodos();
    if (produtos) {
      res.status(200).json(produtos);
    } else {
      res.status(400).json({message: 'Erro ao buscar todos os produtos'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Erro interno ao buscar todos os produtos'});
  }
};

const salvar = async (req, res) => {
  try {
    const result = await produtoService.salvar(req.body);
    if (result) {
      res.status(201).json({message: 'Produto salvo com sucesso'});
    } else {
      res.status(400).json({message: 'Erro ao salvar produto'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Erro interno ao salvar produto'});
  }
};

const atualizar = async (req, res) => {
  try {
    const novoBody = {...req.body, id: Number(req.params.id)};
    const result = await produtoService.atualizar(novoBody);
    if (result) {
      res.status(200).json({message: 'Produto atualizado com sucesso'});
    } else {
      res.status(400).json({message: 'Erro ao atualizar produto'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Erro interno ao atualizar produto'});
  }
};

const remover = async (req, res) => {
  try {
    const result = await produtoService.remover(req.params.id);
    if (result) {
      res.status(200).json({message: 'Produto removido com sucesso'});
    } else {
      res.status(400).json({message: 'Erro ao remover produto'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Erro interno ao remover produto'});
  }
};

module.exports = {
  buscarTodos,
  salvar,
  atualizar,
  remover,
};
