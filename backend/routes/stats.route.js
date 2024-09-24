import express from 'express';
import { getAllStats, setProfile } from '../controllers/stats.controller.js';
import { verifyUser } from '../middleware/auth.middleware.js';
const router = express.Router();

router.get("/getAll", getAllStats);
router.post("/setProfile", verifyUser, setProfile);

export default router;

