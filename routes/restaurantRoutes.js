import express from 'express';
import { nearby, nearbyRange } from '../controllers/restaurantController.js';
import { requireAuth } from '../middleware/auth.js';
const router = express.Router();


// Route for fetching nearby restaurants based on location and radius
router.get('/nearby',requireAuth, nearby);


// Route for fetching restaurants within a specified distance range
router.get('/nearbyrange',requireAuth, nearbyRange);

export default router;
