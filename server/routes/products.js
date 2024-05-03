import express from 'express';
import { getApples, getBanana, getMango } from '../controller/product-controller.js'

const productRouter = express.Router();

productRouter
    .get('/apples', getApples)
    .get('/banana', getBanana)
    .get('/mango', getMango);

export default productRouter;