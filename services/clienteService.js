const pool = require('../config/databaseConfig');
const cacheController = require('../controllers/cacheController');

async function buscarTodos() {
    const chave = '/cliente';

    // Verifica se os dados estão no cache
    const dadosCache = cacheController.getFromCache(chave);
    if (dadosCache) {
        console.log('Dados encontrados no cache:', dadosCache);
        return dadosCache;
    }

    try {
        // Caso não esteja no cache, busca do banco de dados
        const [rows] = await pool.query('SELECT * FROM clientes');
        if (rows.length > 0) {
            // Armazena no cache por 30 segundos
            cacheController.setInCache(chave, rows, 30);
            console.log('Dados armazenados no cache:', rows);
            return rows;
        }
        return null; // Retorna null se não encontrar clientes
    } catch (error) {
        console.error('Erro ao buscar todos os clientes:', error);
        throw error;
    }
}

async function salvar(cliente) {
    try {
        // Lógica para salvar cliente no banco de dados
        await pool.query('INSERT INTO clientes SET ?', cliente);
        return true; // Exemplo de retorno
    } catch (error) {
        console.error('Erro ao salvar cliente:', error);
        throw error;
    }
}

async function atualizar(cliente) {
    try {
        // Lógica para atualizar cliente no banco de dados
        await pool.query('UPDATE clientes SET ? WHERE id = ?', [cliente, cliente.id]);
        return true; // Exemplo de retorno
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error);
        throw error;
    }
}

async function remover(id) {
    try {
        // Lógica para remover cliente no banco de dados
        await pool.query('DELETE FROM clientes WHERE id = ?', id);
        return true; // Exemplo de retorno
    } catch (error) {
        console.error('Erro ao remover cliente:', error);
        throw error;
    }
}

module.exports = {
    buscarTodos,
    salvar,
    atualizar,
    remover,
};
