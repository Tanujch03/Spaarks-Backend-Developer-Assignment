
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config(); // Load environment variables from .env file
 
// connecting to mongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,  // URL parser to avoid warnings
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

export default connectDB;