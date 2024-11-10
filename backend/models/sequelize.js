import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_VANABYTE_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
});

export const syncDatabase = async () => {
    try {
        await sequelize.sync();
        //await sequelize.sync({ force: true });
        console.log(`Tables are synced and ready`);
    } catch (err) {
        console.error('Unable to sync the database:', err);
    }
};
