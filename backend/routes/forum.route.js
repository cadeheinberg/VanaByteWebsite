import express from 'express';
import { getForumPosts, createForumPost } from '../controllers/forum.controller.js';
import { verifyUser } from '../middleware/auth.middleware.js';
const router = express.Router();

router.get("/getAll", getForumPosts);
router.post("/create", verifyUser, createForumPost);

export default router;