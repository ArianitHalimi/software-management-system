import express from 'express'
import ErrorHandler from './global/handlers/error.handler';
import { IRoute } from './all/interfaces/route.interface'

class Application {
    public app: express.Application;
    public PORT: number;
    public database: any;
    public database_connection: any;

    constructor(routesArray: IRoute[], port: number, DatabaseConnection: any) {
        this.app = express();
        this.PORT = port || 5000
        this.app.use(express.json())
        this.initializeRoutes(routesArray)
        this.initializeDatabase(DatabaseConnection)
        this.unhandledRoutes()
    }

    private initializeRoutes(routes: IRoute[]): void {
        routes.forEach(route => {
          this.app.use('/', route.router);
        });
    }

    private initializeDatabase(DatabaseConnection: any): void{
        this.database = new DatabaseConnection()
        this.database_connection = this.database.connectToDatabase()
        this.database.checkConnection()
    }

    private unhandledRoutes(): void {
        this.app.use((error: any, request: express.Request, response: express.Response, next: express.NextFunction) => ErrorHandler.isTrustedError(error) ? response.status(error.statusCode).send({ message: error.message }) : response.status(500).send())
    }

    public use(element: any): void {
        this.app.use(element)
    }

    public listen(callback: any): void {
        this.app.listen(this.PORT, callback)
    }
}

export default Application;