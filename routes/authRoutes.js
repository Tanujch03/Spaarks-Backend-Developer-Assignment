import express from 'express';
import { signup, signin, logout } from '../controllers/authController.js';

const router = express.Router();

// Route for user signup
router.post('/signup', signup);

// Route for user signin
router.post('/signin', signin);

// Route for user logout
router.get('/logout', logout);

export default router;
