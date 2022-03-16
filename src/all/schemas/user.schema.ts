import DatabaseConnection from '../database/database.connection';
import { DataTypes, literal } from 'sequelize'
let db = new DatabaseConnection()
let sequelize = db.connectToDatabase()

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
});

export default User