const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'honeyisfat101',
    database: 'example_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database!');
});

app.get('/people', (req, res) => {
    connection.query('SELECT * FROM people', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
            return;
        }
        res.json(results);
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

console.log('Script ran successfully!');