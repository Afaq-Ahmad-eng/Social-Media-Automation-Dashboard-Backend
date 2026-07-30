//Internal modules
import { redis } from "../../../shared/utils/RedisInstance.js";
import { verifyEmailOtpKeyForRedis } from "../../user/utils/verifyEmailOtpKeyForRedis.js";
const getVerifyEmailOTPFromRedis = async (userEmail) => {
    try {
        return await redis.get(verifyEmailOtpKeyForRedis(userEmail));
    } catch (error) {
        throw error;
    }
}

//export
export {
    getVerifyEmailOTPFromRedis
}