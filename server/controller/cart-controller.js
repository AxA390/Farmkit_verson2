import pool from "./db.js";

export const addCartItems = (req, res) => {
    try {
        // Extract product data from request body
        const { farmer_name, product_name, product_desc, price, location } = req.body;

        // Create SQL query to insert product data into database
        const sql = `INSERT INTO cart (farmer_name, product_name, product_desc, price, location) VALUES (?, ?, ?, ?, ?)`;
        const values = [farmer_name, product_name, product_desc, price, location];

        // Execute the query
        pool.query(sql, values, (error, results) => {
            if (error) {
                console.error('Error adding product to cart:', error);
                res.status(500).json({ error: 'Internal server error.' });
                return;
            }
            console.log('Product added to cart successfully');
            res.status(200).json({ message: 'Product added to cart successfully.' });
        });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

export const getCartItems = (req, res) => {
    try {
        // Create SQL query to fetch cart items from database
        const sql = "SELECT * FROM cart";

        // Execute the query
        pool.query(sql, (error, results) => {
            if (error) {
                console.error("Error fetching cart items:", error);
                res.status(500).json({ error: "Internal server error." });
                return;
            }
            res.status(200).json(results);
        });
    } catch (error) {
        console.error("Error fetching cart items:", error);
        res.status(500).json({ error: "Internal server error." });
    }
}

export const deleteCartItems = (req, res) => {
    try {
        // Extract product ID from request parameters
        const productId = req.params.id;

        // Create SQL query to delete product from cart by ID
        const sql = `DELETE FROM cart WHERE id = ?`;

        // Execute the query
        pool.query(sql, [productId], (error, results) => {
            if (error) {
                console.error('Error deleting product from cart:', error);
                res.status(500).json({ error: 'Internal server error.' });
                return;
            }
            console.log('Product deleted from cart successfully');
            res.status(200).json({ message: 'Product deleted from cart successfully.' });
        });
    } catch (error) {
        console.error('Error deleting product from cart:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}