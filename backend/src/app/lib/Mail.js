import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

const Mail = nodemailer.createTransport(mailConfig);

export default Mail;
