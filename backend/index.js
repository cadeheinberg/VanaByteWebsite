var mysql = require('mysql');
const express = require("express");
const app = express();
const config = require('./db');
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

var host = '192.168.0.103';
const port = 5000;
const con = mysql.createConnection(config.db);
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

console.log("Test Query:")
con.query("SELECT * FROM hub_stats LIMIT 1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});

app.get("/stats", async (req, res) => {
    try {
        con.query("SELECT * FROM hub_stats", function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, host, () => {
    console.log(`Listening at ${host}:${port}`);
});
