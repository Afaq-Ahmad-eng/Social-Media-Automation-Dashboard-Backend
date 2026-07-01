//External modules
import express from 'express'
//Internal modules
import pool from './config/database.js';
const app = express();

pool.connect();

import userRoutes from './modules/user/index.js';

//Middleware to parse JSON requests
app.use(express.json());    
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded requests

//Define the routes for user-related operations
app.use('/api/users', userRoutes);

//Export the app instance for use in other modules
export default app;