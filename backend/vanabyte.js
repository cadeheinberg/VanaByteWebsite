import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import authRoutes from './routes/auth.route.js';
import forumRoutes from './routes/forum.route.js';
import statRoutes from './routes/stats.route.js';
import { syncDatabase } from './models/sequelize.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const nodePort = 5000;

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());

syncDatabase();

app.use("/v1/auth", authRoutes);
app.use("/v1/forum", forumRoutes);
app.use("/v1/stats", statRoutes);

app.listen(nodePort, () => {
    console.log(`Listening at http://localhost:${nodePort}`);
});
