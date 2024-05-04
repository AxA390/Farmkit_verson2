import pool from "./db.js";

export const getApples = (req, res) => {
    pool.query('SELECT farmer_name, product_name, product_desc, price, location FROM product_view WHERE product_name = ?', ['Apple'], (error, results) => {
        if (error) {
            console.error('Error fetching apple data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
}
export const getBanana = (req, res) => {
    pool.query('SELECT farmer_name, product_name, product_desc, price, location FROM product_view WHERE product_name = ?', ['banana'], (error, results) => {
        if (error) {
            console.error('Error fetching apple data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
}
export const getMango = (req, res) => {
    pool.query('SELECT farmer_name, product_name, product_desc, price, location FROM product_view WHERE product_name = ?', ['mango'], (error, results) => {
        if (error) {
            console.error('Error fetching apple data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
}
export const getOrange = (req, res) => {
    pool.query('SELECT farmer_name, product_name, product_desc, price, location FROM product_view WHERE product_name = ?', ['orange'], (error, results) => {
        if (error) {
            console.error('Error fetching apple data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
}
export const getGrapes = (req, res) => {
    pool.query('SELECT farmer_name, product_name, product_desc, price, location FROM product_view WHERE product_name = ?', ['grapes'], (error, results) => {
        if (error) {
            console.error('Error fetching apple data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
}
export const getMelons = (req, res) => {
    pool.query('SELECT farmer_name, product_name, product_desc, price, location FROM product_view WHERE product_name = ?', ['watermelon'], (error, results) => {
        if (error) {
            console.error('Error fetching apple data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
}