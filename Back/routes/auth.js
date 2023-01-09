import express from "express"
import { login } from '../controllers/usersController/authController.js';

const router = express();



router.post('/login', login);



export default router;