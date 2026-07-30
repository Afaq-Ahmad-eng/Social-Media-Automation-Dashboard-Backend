//External modules
import Redis from "ioredis";

//Create redis instance / object

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

//export 
export {redis};