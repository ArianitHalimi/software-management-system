import { SMTPConfig } from '../config/smtp.configuration'
import { createTransport } from 'nodemailer'
import { IMailTemplate, SMTPConfiguration } from '../interfaces/smtp.configuration.interface';

export class MailService {
    private SMTPConfiguration: SMTPConfiguration = SMTPConfig;
    private transporter: any;

    constructor() {
        this.transporter = createTransport(this.SMTPConfiguration)
        this.transporter.verify((error: any) => console.log(error))
    }

    generateMessage(from: string, to: string, subject: string, text: string = "", htmlTemplate: string = ""): IMailTemplate {
        return {
            from, // sender address
            to, // list of receivers
            subject, // Subject line
            text, // plain text body
            html: htmlTemplate // html body
        };
    }

    async sendMail(message: IMailTemplate): Promise<void> {
        await this.transporter.sendMail(message);
    }
}