//Internal modules
import { verifyEmailService } from "../services/verifyEmail.service.js";
const verifyEmailController = async (req, res) => {
  try {
    const updatedUserData = await verifyEmailService(req.user.userId, req.user.userEmail);
    res.status(200).json({
      success: true,
      isVerfied: updatedUserData.is_verified,
      message: "Email verified successfully",
      redirectTo: "/login",
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        isVarified: false,
        message: "Error verifying email", 
        error: error.message 
    });
  }
};

//export the controller for use in other modules
export default verifyEmailController;
