const validarCliente = (req, res, next) => {
    const {idade, nome, sobrenome} = req.body;
  
    if (idade === undefined || idade === '') {
      return res.status(400).json({message: 'O campo "idade" deve ser preenchido'});
    }
  
    if (isNaN(parseInt(idade)) || parseInt(idade) < 0) {
      return res.status(400).json({message: 'O campo "idade" deve ser um número positivo e inteiro'});
    }
  
    if (nome === undefined) {
      return res.status(400).json({message: 'O campo "nome" deve ser preenchido'});
    }
  
    if (nome.trim() === '') {
      return res.status(400).json({message: 'O campo "nome" não pode ser vazio'});
    }
  
    if (sobrenome === undefined) {
      return res.status(400).json({message: 'O campo "sobrenome" deve ser preenchido'});
    }
  
    if (sobrenome.trim() === '') {
      return res.status(400).json({message: 'O campo "sobrenome" não pode ser vazio'});
    }
  
    next();
  };
  
  
  module.exports = {validarCliente};
  