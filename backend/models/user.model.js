import { DataTypes } from 'sequelize';
import { sequelize } from './sequelize.js';
import dotenv from 'dotenv';
dotenv.config();

export const WebUserData = sequelize.define(process.env.DB_TABLE_WEB_DATA, {
    web_uuid: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    mc_uuid: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    username: {
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
    profile: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
    }
}, {
    timestamps: true,
    tableName: process.env.DB_TABLE_WEB_DATA
});