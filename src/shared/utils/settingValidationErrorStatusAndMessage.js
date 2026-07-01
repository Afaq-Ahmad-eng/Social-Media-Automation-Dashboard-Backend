//This function is used to extract the error message and status code from the validation error object and set them in the response object
const settingValidationErrorStatusAndMessage = (error) => {
  const validationErrors = new Error(error.issues[0].message);
  validationErrors.status = 409;
  validationErrors.field = error.issues[0].path[0];
  validationErrors.messages = error.issues[0].message;
  return validationErrors;
};

//Export the function for use in other modules
export default settingValidationErrorStatusAndMessage;
