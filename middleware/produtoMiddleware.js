const validarProduto = (req, res, next) => {
  const { nome, preco, descricao } = req.body;

  if (!nome || nome.trim() === '' || nome.length < 3 || nome.length > 255) {
      return res.status(400).json({ message: 'O campo "nome" deve ser preenchido corretamente (3-255 caracteres)' });
  }

  if (preco === undefined || preco <= 0) {
      return res.status(400).json({ message: 'O campo "preco" deve ser preenchido corretamente e ser positivo' });
  }

  if (!descricao || descricao.length < 3 || descricao.length > 255) {
      return res.status(400).json({ message: 'O campo "descricao" deve ser preenchido corretamente (3-255 caracteres)' });
  }

  next();
};

module.exports = { validarProduto };

  