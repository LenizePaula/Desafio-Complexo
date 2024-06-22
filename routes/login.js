const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const pool = require('../config/databaseConfig');

require('dotenv').config();

router.post('/', async (req, res) => {
    const { usuario, senha } = req.body;

    try {
        const [result] = await pool.query('SELECT * FROM usuarios WHERE usuario = ? AND senha = ?', [usuario, senha]);
        const user = result[0];

        if (user) {
            const token = jwt.sign({ id: user.id, usuario: user.usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
            await pool.query('UPDATE usuarios SET token = ? WHERE id = ?', [token, user.id]);
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Usuário ou senha incorretos' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

module.exports = router;


