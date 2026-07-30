//Internal modules
import { redis } from "../../../shared/utils/RedisInstance.js";
import { verifyEmailOtpKeyForRedis } from "../../user/utils/verifyEmailOtpKeyForRedis.js";

const deleteVerifyEmailOTPFromRedis = async (userEmail) => {
    try {
        await redis.del(verifyEmailOtpKeyForRedis(userEmail));
    } catch (error) {
        throw error;
    }
}

//export
export {
    deleteVerifyEmailOTPFromRedis
}