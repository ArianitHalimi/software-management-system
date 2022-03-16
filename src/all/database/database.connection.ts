import { DATABASE } from '../config/database.configuration';
import { Sequelize } from 'sequelize'

class DatabaseConnection{
    private database = DATABASE;
    private connection: any = null;

    constructor() { }

    connectToDatabase(){
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

            return this.connection;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    async checkConnection(){
        try {
            await this.connection.authenticate();
        } catch (error) {
            throw error;
        }
    }
}

export default DatabaseConnection;