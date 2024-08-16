import express from 'express';
import { signupForm,signinForm, signup, signin, logout } from '../controllers/authController.js';

const router = express.Router();

// GET route for signup
router.get('/signup',signupForm)

// GET route for signin
router.get('/signin',signinForm)


// Route for user signup
router.post('/signup', signup);

// Route for user signin
router.post('/signin', signin);

// Route for user logout
router.get('/logout', logout);

export default router;
