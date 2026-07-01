//Internal modules
import pool from '../../../config/database.js';

const registrationRepository = async (userData) => {
        const { user_name, user_email, user_password } = userData;
        const query = 'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *';
        const values = [user_name, user_email, user_password];

        try {
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    };

export default registrationRepository;