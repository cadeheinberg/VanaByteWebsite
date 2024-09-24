import { WebUserData } from '../models/user.model.js';
import { WebForumPost } from '../models/forum.model.js';
import { v4 as uuidv4 } from 'uuid';

export const createForumPost = async (req, res) => {
    try {
        const web_uuid = req.user.web_uuid
        const { title, description, category } = req.body;
        if (title.length < 10) return res.status(400).json({ message: "Title must be at least 10 characters long" });
        if (title.length > 150) return res.status(400).json({ message: "Title can't be over 150 characters long" });
        if (description.length < 10) return res.status(400).json({ message: "Description must be at least 10 characters long" });
        if (description.length > 5000) return res.status(400).json({ message: "Description can't be over 5000 characters long" });
        const postUser = await WebUserData.findOne({ where: { web_uuid: web_uuid }, raw: true })
        if (!postUser) {
            return res.status(400).json({
                message: 'User Does not Exits!',
            });
        }
        let newPostID;
        let exists = true;
        while (exists) {
            newPostID = uuidv4();
            const existingPost = await WebForumPost.findOne({ where: { post_id: newPostID } });
            exists = existingPost !== null;
        }
        const newPost = await WebForumPost.create({
            post_id: newPostID,
            web_uuid: web_uuid,
            date: new Date(),
            category: category,
            title: title,
            description: description,
            likes: 0,
            dislikes: 0,
            comments: null
        });
        if (!newPost) {
            return res.status(400).json({
                message: 'Post not created 701',
            });
        }
        return res.status(201).json({
            message: 'Post Created from backend',
        });
    } catch (error) {
        console.log("Error in createPost controller:", error);
        return res.status(500).json({ message: "Error creating forum post" });
    }
}

export const getForumPosts = async (req, res) => {
    try {
        const forumPosts = await WebForumPost.findAll({ raw: true, order: [['date', 'DESC']] });
        // for each forumPosts call "const user = getUserFromDatabaseWithWebUUID(forumPost.web_uuid)
        // and attach 2 new fields to the forumPost json, 
        // forumPost.profile = user.profile
        // and forumPost.username = user.profile
        const postsWithUserInfo = await Promise.all(forumPosts.map(async (post) => {
            const postAuthor = await WebUserData.findOne({ where: { web_uuid: post.web_uuid }, raw: true });
            return {
                ...post,
                profile: postAuthor ? postAuthor.profile : null,
                username: postAuthor ? postAuthor.username : null,
            };
        }));
        return res.json(postsWithUserInfo);
    } catch (err) {
        return res.status(500).json({ message: "Error fetching forum posts" });
    }
}