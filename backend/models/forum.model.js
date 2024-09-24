import { DataTypes } from 'sequelize';
import { sequelize } from './sequelize.js';
import { WebUserData } from './user.model.js';
import dotenv from 'dotenv';
dotenv.config();

export const WebForumPost = sequelize.define(process.env.DB_TABLE_WEB_FORUM_POSTS, {
    post_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    web_uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: WebUserData,
            key: "web_uuid"
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    dislikes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true,
    tableName: process.env.DB_TABLE_WEB_FORUM_POSTS
});