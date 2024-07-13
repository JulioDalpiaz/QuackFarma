require('dotenv').config();

const pgp = require("pg-promise")();
const { join } = require('path')

const db = pgp({connectionString: process.env.POSTGRES_URL});

db.query("SELECT 1 + 1 AS result").then((result) => console.log(result));

const filePath = join(__dirname, "create-tables.sql");
const query1 = new pgp.QueryFile(filePath);
db.query(query1);

module.exports = db;