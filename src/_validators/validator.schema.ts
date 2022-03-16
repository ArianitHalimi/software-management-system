import { Request, Response, NextFunction } from 'express'

class Validator {
    public static validate(schema: any) {
        return async (request: Request, response: Response, next: NextFunction) => {

            try {
                const { error, value } = schema.validate(request.body);

                error ? response.status(400).send(error.details[0].message) : next()
            } catch (error) {
                throw error;
            }
        }
    }
}

export default Validator