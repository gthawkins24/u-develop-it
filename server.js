const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

const db = mysql.createConnection(
    {
        host: 'localhost',
        // You MYSQL username,
        user: 'root',
        // Your MY SQL password
        password: '123',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query('SELECT * FROM candidates', (err, rows) => {
    console.log(rows);
});

// Default response for any other request (Not Found, catchall route)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});