import { randomBytes, createHash } from 'crypto'
import { securityConfiguration } from '../config/security.configuration'
import * as jwt from 'jsonwebtoken'

class Security {
    public static generateRandomId(length: number): string {
        /* Generates a random Id */
        return randomBytes(length).toString("hex");
    }

    public static generateUniqueId(): string{
        /* Uses timestamp to generate an unique id merged with random string */
        let randomPrefix = Security.generateRandomId(5);
        let currentTimestamp = new Date(), parsedCurrentTimestamp = Date.parse(currentTimestamp.toString());
        return `${randomPrefix}${parsedCurrentTimestamp}`
    }

    public getTimestampFromUniqueId(id: string) : number | null {
        if(id.length !== 16) return null;
        let hexTimestamp = id.slice(5);

        return parseInt(hexTimestamp, 16)
    }

    public static generateHash(text: string): string {
        /* Generates hash in hex form */
        return createHash(securityConfiguration.HASH_ALGORITHM).update(text).digest("hex");
    }

    public static generateToken(payload: any, secret: string, expireTimeInDays: number = 1): string {
        return jwt.sign(
            payload,
            secret,
            { 
                expiresIn: `${expireTimeInDays}d`
            }
        );
    }
}

export default Security