const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;

// MySQL connection setup
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// API endpoint to fetch data
app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM your_table', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
