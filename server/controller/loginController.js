import pool from "./db.js";

export const userLogin = (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    pool.query(sql, [username, password], (err, result) => {
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
}

export const userSignup = (req, res) => {
    const { username, email, phone_num, password } = req.body;

    const sql = 'INSERT INTO users (username, email, phone_num, password) VALUES (?, ?, ?, ?)';
    pool.query(sql, [username, email, phone_num, password], (err, result) => {
        if (err) {
            res.status(500).send('Error saving user data');
        } else {
            res.status(200).send('User data saved successfully');
        }
    });
}