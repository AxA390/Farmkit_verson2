import express from 'express';
import { getAllProducts, deleteProduct, addProduct, getAllUsers, deleteUser } from "../controller/controller.js";

const router = express.Router(); // Create a router instance

// Define routes on the router
router
    .get('/products', getAllProducts)
    .delete('/products/:productId', deleteProduct)
    .post('/products', addProduct)
    .get('/users', getAllUsers)
    .delete('/users/:id', deleteUser)


export default router;