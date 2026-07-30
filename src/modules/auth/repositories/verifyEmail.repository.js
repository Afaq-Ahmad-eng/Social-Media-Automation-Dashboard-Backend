//Internal modules
import pool from "../../../config/postgresDB.js";

const verifyEmailRepository = async (userId) => {
    try {
        const query = `UPDATE users
        SET is_verified = $1, is_active = $2
        WHERE user_id = $3
        RETURNING user_id, user_email, is_verified, is_active;
        `
         const updateValues = [true, true, userId];
         const result = await pool.query(query, updateValues);

         return result.rows[0] || null;
    } catch (error) {
        throw error;
    }
}

//export
export {
    verifyEmailRepository
}