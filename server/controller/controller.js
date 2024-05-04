import pool from "./db.js"

export const getAllProducts = (req, res) => {
    // Query to fetch product details from the database
    const query = 'SELECT product_name, farmer_name, product_desc AS product_detail, stock, price, location, product_id FROM product_view';

    // Execute the query
    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching product details:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(results);
        }
    });
}

export const deleteProduct = (req, res) => {
    const productId = req.params.productId;
    // Query to delete the product from the database
    const query = 'DELETE FROM product_view WHERE product_id = ?';

    // Execute the query
    pool.query(query, productId, (error, results) => {
        if (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (results.affectedRows > 0) { // Check if any row was affected
                console.log('Product deleted successfully');
                res.status(200).json({ message: 'Product deleted successfully' });
            } else {
                console.log('Product not found');
                res.status(404).json({ error: 'Product not found' });
            }
        }
    });
}

export const addProduct = (req, res) => {
    // Extract product details from the request body
    const { product_name, farmer_name, product_detail, stock, price, location } = req.body;

    // Validate the required fields
    if (!product_name || !farmer_name || !product_detail || !stock || !price || !location) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Query to insert the new product into the database
    const query = 'INSERT INTO product_view (product_name, farmer_name, product_desc, stock, price, location) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [product_name, farmer_name, product_detail, stock, price, location];

    // Execute the query
    pool.query(query, values, (error, results) => {
        if (error) {
            console.error('Error adding product:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('Product added successfully');
            // Return the newly added product data
            const newProduct = {
                product_id: results.insertId,
                product_name,
                farmer_name,
                product_detail,
                stock,
                price,
                location
            };
            res.status(201).json(newProduct);
        }
    });
}

export const getAllUsers = (req, res) => {
    // Query to fetch user data from the database
    const query = 'SELECT id, username, email, password, phone_num AS phone FROM users';

    // Execute the query
    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(results);
        }
    });
}

export const deleteUser = (req, res) => {
    const userId = req.params.id;

    // Query to delete the user from the database
    const query = 'DELETE FROM users WHERE id = ?';

    // Execute the query
    pool.query(query, userId, (error, results) => {
        if (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            // Check if any rows were affected (user deleted)
            if (results.affectedRows > 0) {
                res.status(200).json({ message: 'User deleted successfully' });
            } else {
                // If no rows were affected, the user with the specified ID was not found
                res.status(404).json({ error: 'User not found' });
            }
        }
    });
}
