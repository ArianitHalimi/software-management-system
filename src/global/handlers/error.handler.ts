import { HttpException } from "../exceptions/http.exception";

class ErrorHandler {
    public static isTrustedError(error: Error){
        return error instanceof HttpException;
    }
}

export default ErrorHandler