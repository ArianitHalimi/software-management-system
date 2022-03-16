import { Request, Response, NextFunction } from "express";
import IndexService from '../services/index.service';
import { IntegrationResponse } from '../utils/integration.response'

class IndexController {
    public indexService = new IndexService();

    constructor() {
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    public async login(request: Request, response: Response, next: NextFunction) {
        let { email, password } = request.body;

        let payload = await this.indexService.login(email, password);

        payload.user = IntegrationResponse.parseUserModel(payload.user);

        response.status(200).json(payload);
        
    }

    public async register(request: Request, response: Response, next: NextFunction) {
        let { firstName, lastName, email, password } = request.body;

        let payload = await this.indexService.register(firstName, lastName, email, password);

        let res = IntegrationResponse.parseUserModel(payload);

        response.status(200).json(res);
    }
}

export default IndexController