import express from "express";
import { getCartItems, deleteCartItems, addCartItems } from "../controller/cart-controller.js";

const cartRouter = express.Router()

cartRouter
    .post('/api/cart/add', addCartItems)
    .get("/api/cart", getCartItems)
    .delete('/api/cart/:id', deleteCartItems);

export default cartRouter;