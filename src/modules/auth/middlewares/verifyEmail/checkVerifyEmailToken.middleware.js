// This middleware checks for the presence of the tokenForVerifyEmail cookie in the incoming request. If the cookie is not present, it responds with a 401 Unauthorized status and an error message. If the cookie is present, it calls the next middleware or route handler in the stack.
const checkVerifyEmailToken = (req, res, next) => {
  try {
    if (!tokenForVerifyEmail) {
      return res.status(401).json({ message: "Unauthorized: Missing tokens" });
    }
    req.tokenForVerifyEmail = tokenForVerifyEmail;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error during authentication check.",
    });
  }
};

//export
export { checkVerifyEmailToken };
