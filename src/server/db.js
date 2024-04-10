const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'honeyisfat101',
    database: 'example_db'
})

module.exports = db;