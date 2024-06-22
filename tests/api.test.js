const request = require('supertest');
const app = require('../app');

describe('Testes de validação e autenticação', () => {
    test('Deve validar nome, sobrenome, produto e descrição (3-255 caracteres)', async () => {
        const response = await request(app).post('/cliente').send({ nome: 'AB', sobrenome: 'CD', email: 'test@test.com', idade: 30 });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('O campo "nome" deve ser preenchido corretamente (3-255 caracteres)');
    });

    test('Deve validar email', async () => {
        const response = await request(app).post('/cliente').send({ nome: 'Test', sobrenome: 'Test', email: 'invalid-email', idade: 30 });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('O campo "email" deve ser um email válido');
    });

    test('Deve validar idade (positivo e menor que 120)', async () => {
        const response = await request(app).post('/cliente').send({ nome: 'Test', sobrenome: 'Test', email: 'test@test.com', idade: -1 });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('O campo "idade" deve ser um número positivo, inteiro e menor que 120');
    });

    test('Deve validar preço (positivo)', async () => {
        const response = await request(app).post('/produto').send({ nome: 'Produto Teste', preco: -1, descricao: 'Descrição Teste' });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('O campo "preco" deve ser preenchido corretamente e ser positivo');
    });

    test('Deve autenticar usuário', async () => {
        const response = await request(app).post('/login').send({ usuario: 'testuser', senha: 'testpassword' });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});
