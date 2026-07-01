//External modules
import pkg from 'pg';
import 'dotenv/config'; // Ensures environment variables are loaded immediately

const { Pool } = pkg;

//Create a new pool instance with the database configuration
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
})

pool.on('connect', (client) => {
   console.log('🐘 PostgreSQL client successfully allocated from pool.');
});

// FAILURE: This is where real connection drops are caught.
pool.on('error', (err) => {
    console.error('❌ Unexpected error on idle database client:', err.message);
});

//Export the pool instance for use in other modules
export default pool;