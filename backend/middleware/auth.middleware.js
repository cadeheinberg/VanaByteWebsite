import jwt from 'jsonwebtoken';
import { WebUserData } from '../models/user.model.js';

export const verifyUser = async (req, res, next) => {
    try {
        const token = req.cookies[process.env.JWT_COOKIE_NAME];
        if (!token) {
            return res.status(401).json({ message: "no token found" });
        }
        const decoded = jwt.decode(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "invalid token" });
        }
        const existingUser = await WebUserData.findOne({ where: { web_uuid: decoded.web_uuid }, raw: true });
        if (!existingUser) {
            return res.status(401).json({ message: 'user not found' });
        }
        req.user = existingUser;
        next();
    } catch (error) {
        console.error("Error during verifyUser middleware:", error.message);
        return res.status(400).json({ message: error.message });
    }
}

// this is useful for if someone opens a post and if they are the owner
// we might want to render delete buttons or stuff

//basically the above instantly kills the req by sending a response
//but this one lets it live on
export const getUserIfExists = async (req, res, next) => {
    try {
        const token = req.cookies[process.env.JWT_COOKIE_NAME];
        if (!token) {
            next();
            return;
        }
        const decoded = jwt.decode(token, process.env.JWT_SECRET);
        if (!decoded) {
            next();
            return;
        }
        const existingUser = await WebUserData.findOne({ where: { web_uuid: decoded.web_uuid }, raw: true });
        if (!existingUser) {
            next();
            return;
        }
        req.user = existingUser;
        next();
    } catch (error) {
        next();
    }
}