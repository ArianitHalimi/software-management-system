import { SMTPConfiguration } from "../interfaces/smtp.configuration.interface"

export const SMTPConfig: SMTPConfiguration = {
    host: '',
    port: 465,
    secure: true,
    secureConnection: false,
    requireTLS:true,
    debug: true,
    auth: {
        user: '',
        pass: ''
    }
}