import express from 'express';
import { userLogin, userSignup } from '../controller/loginController.js';

const loginRouter = express.Router();

loginRouter
    .post('/login', userLogin)
    .post('/signup', userSignup)

export default loginRouter;