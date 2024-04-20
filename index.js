import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'farmket'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Signup Route
app.post('/signup', (req, res) => {
    const { username, email,phone_num, password } = req.body;

    const sql = 'INSERT INTO users (username, email, phone_num, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [username, email,phone_num, password], (err, result) => {
        if (err) {
            res.status(500).send('Error saving user data');
        } else {
            res.status(200).send('User data saved successfully');
        }
    });
});

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Error logging in:', err);
            res.status(500).send('Error logging in');
        } else {
            if (result.length > 0) {
                res.status(200).send('Login successful');
            } else {
                res.status(401).send('Invalid username or password');
            }
        }
    });
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
