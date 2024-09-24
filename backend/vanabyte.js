const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const { sequelize, WebUserData, WebForumPosts, Stats, syncDatabase } = require('./sequelize.js');
dotenv.config();
const salt = 10;
const port = 5000;
const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());

syncDatabase();

const getUserFromDatabaseWithWebUUID = async (web_uuid) => {
    try {
        const user = await WebUserData.findOne({ where: { web_uuid: web_uuid }, raw: true });
        if (!user) {
            return null;
        }
        return user;
    } catch (err) {
        return null;
    }
}

const verifyUser = (req, res, next) => {
    const token = req.cookies[process.env.JWT_COOKIE_NAME];
    if (!token) {
        return res.status(204).json({ message: "no token found" });
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            } else {
                req.web_uuid = decoded.web_uuid;
                req.username = decoded.username;
                next();
            }
        })
    }
}

app.get("/", verifyUser, async (req, res) => {
    user = await getUserFromDatabaseWithWebUUID(req.web_uuid)
    if (!user) {
        console.error("JWT found but user not in database: ", err.message);
        console.error("logging out of browser");
        res.clearCookie(process.env.JWT_COOKIE_NAME);
        return res.status(401).json({ message: 'WT found but user not in database, logging you out: ' + err.message });
    }
    return res.status(201).json({
        message: 'Login successful',
        web_uuid: user.web_uuid,
        mc_uuid: user.mc_uuid,
        username: user.username,
        profile: user.profile
    });
});

app.post("/register", async (req, res) => {
    //same as: const name = req.body.name;
    const { username, email, password } = req.body;
    try {
        const hashWord = await bcrypt.hash(password.toString(), salt);
        const newUserId = uuidv4();
        const newUser = await WebUserData.create({
            web_uuid: newUserId,
            mc_uuid: null,
            username: username,
            email: email,
            password: hashWord,
            profile: null,
            role: "user"
        });
        return res.status(201).json({ message: 'Registration successful' });
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: "Oops! An account with that email address already exists" });
        } else {
            return res.status(400).json({ message: err.message });
        }
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await WebUserData.findOne({ where: { email: email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const hashWord = user.password;
        const isMatch = await bcrypt.compare(password, hashWord);
        if (isMatch) {
            const web_uuid = user.web_uuid;
            const username = user.username;
            const token = jwt.sign({ web_uuid, username }, process.env.JWT_SECRET, { expiresIn: '1d' });
            res.cookie(process.env.JWT_COOKIE_NAME, token, {
                httpOnly: true, //make sure the cookie can't be accessed through JavaScript
                secure: process.env.NODE_ENV === 'production', //use 'secure' flag only in production
                sameSite: 'Strict',
                maxAge: 24 * 60 * 60 * 1000 //1 day
            });
            return res.status(201).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error("Error during login:", err.message);
        return res.status(400).json({ message: err.message });
    }
});

app.get("/logout", async (req, res) => {
    res.clearCookie(process.env.JWT_COOKIE_NAME);
    return res.json({ Status: "Success" });
});

app.get("/stats", async (req, res) => {
    try {
        //raw: true option to just get a simple return, not all the sequelize jargon
        const stats = await Stats.findAll({ raw: true });
        return res.json(stats);
    } catch (err) {
        return res.status(500).json({ message: "Error fetching stats" });
    }
});

app.post("/forums", verifyUser, async (req, res) => {
    const web_uuid = req.web_uuid
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
        const existingPost = await WebForumPosts.findOne({ where: { post_id: newPostID } });
        exists = existingPost !== null;
    }
    const newPost = await WebForumPosts.create({
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
})

app.get("/forums", async (req, res) => {
    try {
        const forumPosts = await WebForumPosts.findAll({ raw: true, order: [['date', 'DESC']] });
        // for each forumPosts call "const user = getUserFromDatabaseWithWebUUID(forumPost.web_uuid)
        // and attach 2 new fields to the forumPost json, 
        // forumPost.profile = user.profile
        // and forumPost.username = user.profile
        const postsWithUserInfo = await Promise.all(forumPosts.map(async (post) => {
            const user = await getUserFromDatabaseWithWebUUID(post.web_uuid);
            if (user) {
                return {
                    ...post,
                    profile: user.profile,
                    username: user.username
                };
            }
            return {
                ...post,
                profile: null,
                username: null
            };
        }));
        return res.json(postsWithUserInfo);
    } catch (err) {
        return res.status(500).json({ message: "Error fetching forum posts" });
    }
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
