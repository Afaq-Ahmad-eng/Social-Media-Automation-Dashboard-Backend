// Middleware to check the verify email token
import { verifyJWT } from "../../../shared/utils/verifyJWT.js";

const verifyEmailToken = (req, res, next) => {
  // Verify the token using the verifyJWT function
  try {
    const decoded = verifyJWT(req.tokenForVerifyEmail);
    req.user = decoded; // Attach the decoded user information to the request object

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message:
          "Unauthorized: Verification token has expired. Please request a new one.",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or tampered verification token.",
    });
  }
};

// Export the middleware for use in other modules
export { verifyEmailToken };
