import express from 'express';
import { nearby, nearbyRange } from '../controllers/restaurantController.js';

const router = express.Router();


// Route for fetching nearby restaurants based on location and radius
router.get('/nearby', nearby);


// Route for fetching restaurants within a specified distance range
router.get('/nearbyrange', nearbyRange);

export default router;
