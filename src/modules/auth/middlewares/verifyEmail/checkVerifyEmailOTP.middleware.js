//This middleware check if the OTP check that in the incoming request the OTP is EXISTS or not
const checkVerifyEmailOTP = (req, res, next) => {
    const { otp } = req.body;
    if(!otp){
      return res.status(422).json({
        success: false,
        message: `OTP is required for email verification!`
      })
    }
    req.verifyEmailOTP = otp;

    //if the otp is available in the incoming request then this middleware simply pass the control to the next middleware for the next step proccessing
    next();
}

//export
export{
    checkVerifyEmailOTP
}