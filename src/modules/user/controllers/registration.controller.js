//Internal modules
import registrationService from '../services/registration.service.js';
import validateRegistration from '../validations/registration.validation.js';
import settingValidationErrorStatusAndMessage from '../../../shared/utils/settingValidationErrorStatusAndMessage.js';
import settingResponseForValidationFailure from '../../../shared/utils/settingResponseForValidationFailure.js';
const resgistrationController = async (req, res) => {
    try {
        const {success, data, error} = validateRegistration(req.body); // Validate the user data
        if(!success){
            const validationError = settingValidationErrorStatusAndMessage(error);
            return settingResponseForValidationFailure(res, validationError);
        }
        const userData = {
            user_name: data.username,
            user_email: data.useremail,
            user_password: data.userpassword
        }
        const registeredUser = await registrationService(userData);
        res.status(201).json({ message: 'User registered successfully dfasdasdsa', user: registeredUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

//export the controller for use in other modules
export default resgistrationController;