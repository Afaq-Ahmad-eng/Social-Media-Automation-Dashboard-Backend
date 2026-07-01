//External modules
import express from 'express'
const router = express.Router();

//Internal modules
import registrationController from '../controllers/registration.controller.js';

//Define the route for user registration
router.post('/register', registrationController);

//Export the router for use in other modules
export default router;