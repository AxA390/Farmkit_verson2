import express from 'express';
import cors from 'cors';
import router from './routes/admin.js';
import loginRouter from './routes/login.js';
import productRouter from './routes/products.js';
import cartRouter from './routes/cart-routes.js';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/api', router); // Mount the router with the '/api' prefix
app.use(loginRouter)
app.use('/api', productRouter)
app.use(cartRouter)


// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
