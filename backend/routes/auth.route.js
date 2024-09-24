import express from 'express';
import { getCurrentUser, login, logout, register } from '../controllers/auth.controller.js';
import { verifyUser } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

router.get("/cookie", verifyUser, getCurrentUser);

export default router;
