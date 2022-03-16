import statusCodes from '../utils/status.codes';

export class HttpException extends Error{
    statusCode: number;
    message: string;

    constructor(statusCode: number, message: string){
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);

        this.statusCode = statusCode;
        this.message = message;

        Error.captureStackTrace(this);
    }
}

export class BadRequest extends HttpException {
    constructor(message: string){
        super(statusCodes.BAD_REQUEST, message);
    }
}

export class Unauthorized extends HttpException {
    constructor(message: string){
        super(statusCodes.UNAUTHORIZED, message);
    }
}

export class Forbidden extends HttpException {
    constructor(message: string){
        super(statusCodes.FORBIDDEN, message);
    }
}

export class NotFound extends HttpException {
    constructor(message: string){
        super(statusCodes.NOT_FOUND, message);
    }
}

export class Conflict extends HttpException {
    constructor(message: string){
        super(statusCodes.CONFLICT, message);
    }
}

export class InternalServerError extends HttpException {
    constructor(message: string){
        super(statusCodes.INTERNAL_SERVER_ERROR, message);
    }
}

export class NotImplemented extends HttpException {
    constructor(message: string){
        super(statusCodes.NOT_IMPLEMENTED, message);
    }
}