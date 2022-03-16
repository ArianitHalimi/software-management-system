export interface SMTPConfiguration {
    host: string,
    port: number,
    secure: boolean,
    secureConnection: boolean,
    requireTLS: boolean,
    debug: boolean,
    auth: IAuthUser
}

interface IAuthUser {
    user: string;
    pass: string;
}

export interface IMailTemplate {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}