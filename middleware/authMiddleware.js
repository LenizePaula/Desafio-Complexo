const jwt = require('jsonwebtoken');
const pool = require('../config/databaseConfig');

const authenticateJWT = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ? AND token = ?', [decoded.id, token]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.error('Erro ao autenticar token:', error);
    res.status(403).json({ message: 'Falha na autenticação do token' });
  }
};

module.exports = authenticateJWT;

