import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import restaurantRoutes from './routes/restaurantRoutes.js';

dotenv.config();

connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Route handling for authentication
app.use('/api/auth', authRoutes);

// Route handling for restaurant
app.use('/api/restaurants', restaurantRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`);
});
