//basic
require('dotenv').config();
const path = require('path');
const cors = require("cors");

//express config
const express = require('express');
const app = express();
const HOST = '0.0.0.0';
const PORT = 3000; //container port

app.use(cors()); //for axios cross url access, so we can respond to fornt end requests
app.use(express.static(path.join(__dirname, 'public'))); //just for a test form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database, pg pool (located at ./dbConnection.js)
const dbPool = require('./dbConnection');

//basic test routes
app.get('/', async (req, res) => {
    try {
        await dbPool.query('CREATE TABLE IF NOT EXISTS testes (id SERIAL PRIMARY KEY, nome VARCHAR(100), idade INT)');
        res.sendFile(path.join(__dirname, 'public', 'teste.html'));
    } catch (error) {
        console.error('Erro na rota /:', error.message);
        res.status(500).send('Erro ao criar tabela. Veirfique o log.');
    }
});

app.post('/insert', async (req, res) => {
    const { nome, idade } = req.body;
    try {
        await dbPool.query('INSERT INTO users (nome, idade) VALUES ($1, $2)', [nome, idade]);
        res.send('Usuário criado com sucesso!');
    } catch (error) {
        console.error('Erro na rota /insert:', error.message);
        res.status(500).send('Erro ao criar usuário. Veirfique o log');
    }
});

app.get('/select', async (req, res) => {
    try {
        const resposta = await dbPool.query('SELECT * FROM users');
        res.json(resposta.rows); 
    } catch (error) {
        console.error('Erro na rota /select:', error.message);
        res.status(500).send('Erro ao buscar usuários. Veirfique o log');
    }
});

app.post('/update', async (req, res) => {
    const { nome, novoNome, idade } = req.body;
    try {
        await dbPool.query('UPDATE users SET nome = $1, idade = $2 WHERE nome = $3', [novoNome, idade, nome]);
        res.send('Usuário atualizado com sucesso!');
    } catch (error) {
        console.error('Erro na rota /update:', error.message);
        res.status(500).send('Erro ao atualizar usuário. Veirfique o log');
    }
});

app.post('/delete', async (req, res) => {
    const { nome } = req.body;
    try {
        await dbPool.query('DELETE FROM users WHERE nome = $1', [nome]);
        res.send('Usuário deletado com sucesso!');
    } catch (error) {
        console.error('Erro na rota /delete:', error.message);
        res.status(500).send('Erro ao deletar usuário. Veirfique o log');
    }
});

//ouvirodira
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});