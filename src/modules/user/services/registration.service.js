//Internal modules
import registrationRepository from '../repositories/registration.repository.js';
import { passwordHash } from '../../../shared/utils/passwordHash.js';
const registrationService = async (userData) => {
    try{
        // Hash the user's password before storing it
        userData.user_password = await passwordHash(userData.user_password);
        return await registrationRepository(userData);
    }catch(error){
        throw error;
    }
};

export default registrationService;