import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { WebUserData } from '../models/user.model.js';

export const getCurrentUser = async (req, res) => {
    try {
        res.json({ user: req.user });
    } catch (err) {
        console.error("Error during getCurrentUser controller:", err.message);
        return res.status(400).json({ message: err.message });
    }
}

export const register = async (req, res) => {
    try {
        //same as: const name = req.body.name;
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (username.length < 3) {
            return res.status(400).json({ message: 'Username must be at least 3 characters long' });
        }
        if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
            return res.status(400).json({ message: 'Email must be in valid format' });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long' });
        }
        const existingEmail = await WebUserData.findOne({ where: { email: email } });
        if (existingEmail) {
            return res.status(400).json({ message: "An account with that email address already exists" });
        }
        const existingUsername = await WebUserData.findOne({ where: { username: username } });
        if (existingUsername) {
            return res.status(400).json({ message: "An account with that username already exists" });
        }
        const salt = await bcrypt.genSalt(10);
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
        return res.status(400).json({ message: err.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await WebUserData.findOne({ where: { email: email } });
        if (!existingUser) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
        }
        const web_uuid = existingUser.web_uuid;
        const token = jwt.sign({ web_uuid }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.cookie(process.env.JWT_COOKIE_NAME, token, {
            httpOnly: true, //make sure the cookie can't be accessed through JavaScript
            secure: process.env.NODE_ENV === 'production', //use 'secure' flag only in production
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 1000 //1 day
        });
        return res.status(201).json({ message: 'Logged in successfully' });
    } catch (err) {
        console.error("Error during login controller:", err.message);
        return res.status(400).json({ message: err.message });
    }
};

export const logout = async (req, res) => {
    res.clearCookie(process.env.JWT_COOKIE_NAME);
    return res.json({ message: "Logged out successfully" });
}