//Internal modules
import app from './src/app.js';


//Confige the dotenv file to use the environment variables
import dotenv from 'dotenv/config';

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server is running on PORT ${process.env.SERVER_PORT} `);
})