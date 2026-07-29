//Core module
import crypto from "crypto";

const verifyEmailOtpKeyForRedis = (userEmail) => {
  const normalizedEmail = userEmail.trim().toLowerCase();

  //Hash-based Message Authentication Code.
  const hmacEmail = crypto
    .createHmac("sha256", process.env.REDIS_SECRET)
    .update(normalizedEmail)
    .digest("hex");

  return `verifyEmailOTP:${hmacEmail}`;
};

//export
export { verifyEmailOtpKeyForRedis };
