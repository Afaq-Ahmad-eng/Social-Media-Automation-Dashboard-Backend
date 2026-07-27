import { createClient } from 'redis';
import 'dotenv/config';

const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  socket: {
    connectTimeout: 2000, // 2 seconds timeout matching your pool configuration
  },
});

// Event listeners matching your logging style
redisClient.on('connect', () => {
  console.log('🔴 Redis client connected.');
});

redisClient.on('ready', () => {
  console.log('⚡ Redis client ready for use.');
});

// FAILURE: Real connection drops / connection failures are caught here
redisClient.on('error', (err) => {
  console.error('❌ Unexpected error on Redis client:', err.message);
});

// Function to explicitly connect when the server starts
export const connectRedis = async () => {
  try {
    if (!redisClient.isOpen) {
      await redisClient.connect();
    }
  } catch (err) {
    console.error('❌ Could not connect to Redis:', err.message);
  }
};

// Export the initialized client to use in your modules/services
export default redisClient;