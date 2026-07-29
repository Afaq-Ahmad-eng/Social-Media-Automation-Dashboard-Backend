//Internal modules
import { redis } from "../../../shared/utils/RedisInstance.js";
import { verifyEmailOtpKeyForRedis } from "./verifyEmailOtpKeyForRedis.js";

const setVerifyEmailOTPInRedis = async (userEmail, otp) => {
    try {
        await redis.set(verifyEmailOtpKeyForRedis(userEmail), otp, 'EX', Number(process.env.VERIFY_EMAIL_OTP_EXPIRATION_TIME));
    } catch (error) {
        throw error;
    }
}

//export
export {
    setVerifyEmailOTPInRedis
}