var mysql = require('mysql');
const express = require("express");
const config = require('./credentials');

const app = express();
const port = 3000;
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const connection = mysql.createConnection(config.db);