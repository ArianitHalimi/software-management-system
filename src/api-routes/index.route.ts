import { Router } from 'express'
import IndexController from '../controllers/index.controller'
import { IRoute } from '../interfaces/route.interface'
import SafeState from '../../global/handlers/safe.state'
import { RegisterValidator } from '../_validators/register.validator.schema'

class IndexRoute implements IRoute {
    public path: string = "/";
    public router = Router();
    
    private indexController = new IndexController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}login`, SafeState(this.indexController.login));
        this.router.post(`${this.path}register`, RegisterValidator.validate(), SafeState(this.indexController.register));
    }
}

export default IndexRoute