//This middleware is use to match the client otp for verify email with the otp which we store in the redis of verify email
import { getVerifyEmailOTPFromRedis } from "../../utils/getVerifyEmailOTPFromRedis.js";
const matchClientOTPWithStoreOTPInRedis = async (req, res, next) => {
  try {
    // Fetch the stored OTP from Redis using email
    const StoreOtp = await getVerifyEmailOTPFromRedis(req.body.email);

    // Handle case where OTP in Redis has expired or doesn't exist
    if (!StoreOtp) {
      return res.status(404).json({
        success: false,
        message: `OTP has expire or is invalid. Please request new one.`,
      });
    }

    // Match client OTP against stored OTP (handling string vs number types safely)
    if (String(req.verifyEmailOTP || req.body.otp) !== String(StoreOtp)) {
      return res.status(400).json({
        success: false,
        message: `Please provide the correct OTP!`,
      });
    }

    // Control passes to the next middleware or route controller       
     next();
  } catch (error) {
    // Pass the error to Express global error handler (preferred in production)
    // OR return a standard 500 server error response directly:
    return res.status(500).json({
      success: false,
      message: "Internal server error during OTP verification.",
    });
  }
};

//export
export { matchClientOTPWithStoreOTPInRedis };
