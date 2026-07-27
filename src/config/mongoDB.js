import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Optional timeout settings matching your quick-fail approach
      serverSelectionTimeoutMS: 2000, 
    });

    console.log(`🍃 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

// Handle connection events for logging/error catching
mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ MongoDB disconnected.');
});

mongoose.connection.on('error', (err) => {
  console.error(`❌ Unexpected error on MongoDB client: ${err.message}`);
});

export default connectDB;