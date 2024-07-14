require('dotenv').config();
const { Pool } = require('pg');
const express = require('express');
const path = require('path');

const app = express();

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, nome VARCHAR(100), idade INT)');
        res.sendFile(path.join(__dirname, 'public', 'teste.html'));
    } catch (error) {
        console.error('Erro ao criar tabela:', error.message);
        res.status(500).send('Erro ao criar tabela: ' + error.message);
    }
});

app.post('/insert', async (req, res) => {
    const { nome, idade } = req.body;
    try {
        await pool.query('INSERT INTO users (nome, idade) VALUES ($1, $2)', [nome, idade]);
        res.send('Usuário criado com sucesso!');
    } catch (error) {
        console.error('Erro ao criar usuário:', error.message);
        res.status(500).send('Erro ao criar usuário: ' + error.message);
    }
});

app.get('/user', async (req, res) => {
    try {
        const resposta = await pool.query('SELECT * FROM users');
        res.json(resposta.rows);  // Assegure-se de usar 'rows' para obter todas as linhas da resposta
    } catch (error) {
        console.error('Erro ao buscar usuários:', error.message);
        res.status(500).send('Erro ao buscar usuários: ' + error.message);
    }
});

const porta = 3000;

app.listen(porta, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${porta}`);
});