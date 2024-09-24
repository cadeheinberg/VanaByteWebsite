import { DataTypes } from 'sequelize';
import { sequelize } from './sequelize.js';
import dotenv from 'dotenv';
dotenv.config();

export const MinecraftStats = sequelize.define(process.env.DB_TABLE_MINECRAFT_STATS, {
    mc_uuid: {
        type: DataTypes.STRING,
        primaryKey: true,
        field: 'UUID' // UUID is the name in the actual table
    },
    playerName: {
        type: DataTypes.STRING,
        field: 'PlayerName'
    },
    server_cakes: {
        type: DataTypes.INTEGER,
        field: 'server_cakes'
    },
    server_level: {
        type: DataTypes.INTEGER,
        field: 'server_level'
    },
    server_xp: {
        type: DataTypes.INTEGER,
        field: 'server_xp'
    },
    kitpvp_kit_id: {
        type: DataTypes.INTEGER,
        field: 'kitpvp_kit_id'
    },
    kitpvp_kills: {
        type: DataTypes.INTEGER,
        field: 'kitpvp_kills'
    },
    kitpvp_killstreak: {
        type: DataTypes.INTEGER,
        field: 'kitpvp_killstreak'
    },
    kitpvp_deaths: {
        type: DataTypes.INTEGER,
        field: 'kitpvp_deaths'
    },
    unlocked_kit_00: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_00'
    },
    unlocked_kit_01: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_01'
    },
    unlocked_kit_02: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_02'
    },
    unlocked_kit_03: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_03'
    },
    unlocked_kit_04: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_04'
    },
    unlocked_kit_05: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_05'
    },
    unlocked_kit_06: {
        type: DataTypes.INTEGER,
        field: 'unlocked_kit_06'
    }
}, {
    timestamps: false,
    tableName: process.env.DB_TABLE_MINECRAFT_STATS,
    freezeTableName: true
});