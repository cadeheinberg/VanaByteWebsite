const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const { sequelize, User, Stats, syncDatabase } = require('./sequelize.js');
dotenv.config();
const salt = 10;
const port = 5000;
const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());

syncDatabase();

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
    return res.status(201).json({
        message: 'Login successful',
        web_uuid: req.web_uuid,
        username: req.username
    });
});

app.post("/register", async (req, res) => {
    //same as: const name = req.body.name;
    const { username, email, password } = req.body;
    try {
        const hashWord = await bcrypt.hash(password.toString(), salt);
        const newUserId = uuidv4();
        const newUser = await User.create({
            web_uuid: newUserId,
            mc_uuid: null,
            name: username,
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
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const hashWord = user.password;
        const isMatch = await bcrypt.compare(password, hashWord);
        if (isMatch) {
            const web_uuid = user.web_uuid;
            const username = user.name;
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
        res.json(stats);
    } catch (err) {
        res.status(500).json({ message: "Error fetching stats" });
    }
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
