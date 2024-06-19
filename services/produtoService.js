const pool = require('../config/databaseConfig');

const buscarTodos = async () => {
  const [produtos] = await pool.execute('SELECT * FROM produtos');
  return produtos;
};

const salvar = async (produto) => {
  const {nome, preco, descricao} = produto;
  const query = 'INSERT INTO produtos (nome, preco, descricao) VALUES (?, ?, ?)';
  const [result] = await pool.execute(query, [nome, preco, descricao]);
  return result.affectedRows === 1;
};

const atualizar = async (produto) => {
  const {id, nome, preco, descricao} = produto;
  const query = 'UPDATE produtos SET nome = ?, preco = ?, descricao = ? WHERE id = ?';
  const [result] = await pool.execute(query, [nome, preco,descricao, id]);
  return result.affectedRows === 1;
};

const remover = async (id) => {
  const query = 'DELETE FROM produtos WHERE id = ?';
  const [result] = await pool.execute(query, [id]);
  return result.affectedRows === 1;
};

module.exports = {
  buscarTodos,
  salvar,
  atualizar,
  remover,
};
