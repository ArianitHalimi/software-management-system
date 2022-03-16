import * as jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express";
import { securityConfiguration } from "../config/security.configuration";
import { Unauthorized } from "../exceptions/http.exception";
import User from "../schemas/user.schema";

const authMiddleware = async(request: Request, response: Response, next: NextFunction) => {
    try {
        const Authorization: string | null = request.headers?.authorization?.split('Bearer ')[1] || null;

        if(!Authorization) throw new Error();

        let parsedToken: any = await jwt.verify(Authorization, securityConfiguration.TOKEN_KEY);

        let userId = parsedToken.id;
        let user = await User.findOne({id: userId});

        if(!user) throw new Error();

        response.locals.loggedUser = user;
        next();
        
    } catch (error) {
        throw new Unauthorized("Unauthorized");
    }
}

export default authMiddleware