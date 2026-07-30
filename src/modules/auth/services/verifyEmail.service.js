//Internal modules
import { verifyEmailRepository } from "../repositories/verifyEmail.repository.js";
import { deleteVerifyEmailOTPFromRedis } from "../utils/deleteVerifyEmailOTPFromRedis.js";
const verifyEmailService = async (userId, userEmail) => {
    try {
        const updatedUserData = await verifyEmailRepository(userId);
        await deleteVerifyEmailOTPFromRedis(userEmail);
        return updatedUserData;
    } catch (error) {
        throw error;
    }
}

//export
export {
    verifyEmailService
}