//When the validation is failed, this function will be used to set the response for the validation failure
const settingResponseForValidationFailure = (res, result) => {
    return res.status(result.status || 500).json({
    success: false,
    error: `${result.field ? result.field + " is required." + result.messages : result.message || "An unexpected error occurred"}`
  });
};

//Export the function for use in other modules
export default settingResponseForValidationFailure;