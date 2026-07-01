//External modules
import {z} from 'zod';

//Define the schema for user registration validation
const registrationSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
    useremail: z.string().email({ message: "Invalid email address" }),
    userpassword: z.string().min(6, { message: "Password must be at least 6 characters long" })
});

const validateRegistration = (registrationData) => {
        return registrationSchema.safeParse(registrationData);
};

export default validateRegistration;