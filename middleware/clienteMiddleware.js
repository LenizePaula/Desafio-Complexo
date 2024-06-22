const validarCliente = (req, res, next) => {
    const { idade, nome, sobrenome, email } = req.body;
  
    // Validar idade
    if (!idade || isNaN(parseInt(idade)) || parseInt(idade) < 0 || parseInt(idade) >= 120) {
      return res.status(400).json({ message: 'O campo "idade" deve ser um número positivo, inteiro e menor que 120' });
    }
  
    // Validar nome
    if (!nome || nome.trim().length < 3 || nome.trim().length > 255) {
      return res.status(400).json({ message: 'O campo "nome" deve ser preenchido corretamente (3-255 caracteres)' });
    }
  
    // Validar sobrenome
    if (!sobrenome || sobrenome.trim().length < 3 || sobrenome.trim().length > 255) {
      return res.status(400).json({ message: 'O campo "sobrenome" deve ser preenchido corretamente (3-255 caracteres)' });
    }
  
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ message: 'O campo "email" deve ser um email válido' });
    }
  
    next();
  };
  
  module.exports = { validarCliente };
  