const express = require('express');
const router = express.Router();
const pool = require('../config/databaseConfig');
const autenticarJWT = require('../middleware/authMiddleware');

router.post('/', autenticarJWT, async (req, res) => {
    try {
        const [result] = await pool.query('UPDATE usuarios SET token = NULL WHERE id = ?', [req.user.id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.json({ message: 'Logout bem-sucedido' });
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

module.exports = router;
