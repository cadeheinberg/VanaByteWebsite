import express from 'express';
import { getForumPosts, createForumPost, getForumPost } from '../controllers/forum.controller.js';
import { getUserIfExists, verifyUser } from '../middleware/auth.middleware.js';
const router = express.Router();

router.get("/getAll", getUserIfExists, getForumPosts);
router.get("/post/:post_id", getUserIfExists, getForumPost);
router.post("/create", verifyUser, createForumPost);

export default router;