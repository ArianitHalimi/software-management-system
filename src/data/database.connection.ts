import DBConfig from './config/database.configuration';
import { Sequelize } from 'sequelize'

class DatabaseConnection{
    private database = DBConfig;
    private connection: any = null;

    constructor() { }

    private createConnection(){
        try {
            this.connection = new Sequelize(
                this.database.options.databaseName, 
                this.database.options.user, 
                this.database.options.password,
                {
                    host: this.database.options.host,
                    dialect: 'mysql',
                    define: {
                        timestamps: false
                    }
                }
            );
        } catch (error: any) {
            this.connection = null;
        }
    }

    connectToDatabase(){
        this.createConnection();
        return this.connection;
    }

    async checkConnection(): Promise<void> { 
        await this.connection.authenticate();
    }
}

export default DatabaseConnection;