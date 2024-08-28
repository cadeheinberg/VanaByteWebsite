//added to package.json to be allowed to use import keyword: "type": "module",
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require('uuid');
const salt = 10;

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectTimeout: 6000
};

const pool = mysql.createPool(dbConfig, (err, response) => {
    if (err) {
        console.log('Database Error 1', err);
    }
});

const db = pool.promise();

async function createTables() {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS ${process.env.DB_TABLE_USER_DATA} (
                user_id VARCHAR(255) NOT NULL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                profile VARCHAR(255) NOT NULL
            );
        `);
        console.log(process.env.DB_TABLE_USER_DATA + " table is ready");
    } catch (err) {
        console.error("Error creating" + process.env.DB_TABLE_USER_DATA + "table:", err.message);
    }
}

createTables();

//////
////// ROUTING
//////

const verifyUser = (req, res, next) => {
    const token = req.cookies[process.env.JWT_COOKIE_NAME];
    if (!token) {
        return res.status(204).json({ message: "no token found" });
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            } else {
                req.user_id = decoded.user_id;
                req.username = decoded.username;
                next();
            }
        })
    }
}

app.get("/", verifyUser, async (req, res) => {
    return res.status(201).json({
        message: 'Login successful',
        user_id: req.user_id,
        username: req.username
    });
});

app.post("/login", async (req, res) => {
    console.log("login requested for ")
    console.log(req.body);
    const { email, password } = req.body;
    try {
        const [rows] = await db.query(`SELECT * FROM ${process.env.DB_TABLE_USER_DATA} WHERE email = ?`, [email]);
        if (rows.length === 0) {
            res.status(401).json({ message: 'Invalid credentials' });
        }
        const hashWord = rows[0].password;
        const isMatch = await bcrypt.compare(password, hashWord);
        if (isMatch) {
            const user_id = rows[0].user_id;
            const username = rows[0].name;
            console.log(username + " logged in successfully");
            const token = jwt.sign({ user_id, username }, process.env.JWT_SECRET, { expiresIn: '1d' });
            res.cookie(process.env.JWT_COOKIE_NAME, token, {
                httpOnly: true, // Makes sure the cookie can't be accessed through JavaScript
                secure: process.env.NODE_ENV === 'production', // Use 'secure' flag only in production
                sameSite: 'Strict', // or 'Lax' depending on your use case
                maxAge: 24 * 60 * 60 * 1000 // 1 day
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

app.post("/register", async (req, res) => {
    console.log("register requested for ")
    console.log(req.body);
    //same as: const name = req.body.name;
    const { username, email, password } = req.body;
    try {
        //hash the password
        const hashWord = await bcrypt.hash(password.toString(), salt);
        const newUserId = uuidv4();
        const [result] = await db.query(`INSERT INTO ${process.env.DB_TABLE_USER_DATA} (user_id, name, email, password, profile) VALUES (?, ?, ?, ?, ?)`, [newUserId.toString(), username, email, hashWord, 'none']);
        return res.status(201).json({ message: 'Registration successful' });
    } catch (err) {
        console.log(err)
        if (err.errno === 1062) {
            console.error("Error during registration:", err.message);
            return res.status(400).json({ message: "Oops! An account with that email address already exists" });
        } else {
            console.error("Error during registration:", err.message);
            return res.status(400).json({ message: err.message });
        }
    }
});

app.get("/logout", async (req, res) => {
    console.log("logout requested")
    res.clearCookie(process.env.JWT_COOKIE_NAME);
    return res.json({ Status: "Success" });
});

app.get("/stats", async (req, res) => {
    console.log("stats hit")
    try {
        const [result] = await db.query("SELECT * FROM hub_stats");
        res.json(result);
    } catch (err) {
        if (err) console.error(err.message);
    }
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
