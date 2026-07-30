//External modules
import nodemailer from 'nodemailer';

// Create the transporter using credentials stored in .env
const emailTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Boolean(process.env.SMTP_SECURE), // true for 465, false for other ports
    // family: Number(process.env.SMTP_FAMILY) || 4, // 4 for IPv4, 6 for IPv6
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

//Export
export {
    emailTransporter
}