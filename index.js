require('dotenv').config();

async function start(){
    const db = require("./db");

    const res = await db.insert(['ZecaPagode', 100, 'MS']);
    console.log(res.rowCount);

    clientes = await db.select('SELECT * FROM clientes;');
    console.log(clientes);
}

start();