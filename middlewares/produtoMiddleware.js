const validarProduto = (req, res, next) => {
    const {nome, preco, descricao} = req.body;
  
    if (!nome || nome.trim() === '') {
      return res.status(400).json({message: 'O campo "nome" deve ser preenchido corretamente'});
    }
  
    if (preco === undefined || preco <= 0) {
      return res.status(400).json({message: 'O campo "preco" deve ser preenchido corretamente'});
    }
  
    if (descricao === undefined || descricao < 0) {
      return res.status(400).json({message: 'O campo "descricao" deve ser preenchido corretamente'});
    }
  
    next();
  };
  
  module.exports = {validarProduto};
  