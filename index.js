require('dotenv').config();
const { Pool } = require('pg');

const express = require('express');
const app = express();

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
})

module.exports = pool;

const porta = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    await pool.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, nome VARCHAR(100), idade INT)');
    res.send('Sucesso!!');
})

app.post('/users', async (req, res) => {
    const { nome, idade } = req.body;
    const response = await pool.query('INSERT INTO users (nome, idade) VALUES ($1, $2)', [nome], [idade]);
    res.send('Sucesso dnv!');
})

app.get('/users', async (req, res) => {
    const resposta = await pool.query('SELECT * FROM users');
    res.send(resposta.row);
})

app.listen(porta, () => {;
    console.log(`Rodando em http://localhost:${porta}`);
})