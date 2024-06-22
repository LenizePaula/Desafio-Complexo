const express = require('express');
const router = express.Router();
const pool = require('../config/databaseConfig');
const autenticarJWT = require('../middleware/authMiddleware');

router.post('/', autenticarJWT, async (req, res) => {
    try {
        await pool.query('UPDATE usuarios SET token = NULL WHERE id = ?', [req.user.id]);
        res.json({ message: 'Logout bem-sucedido' });
    } catch (error) {
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

module.exports = router;
