var mysql = require('mysql');
const express = require("express");
const config = require('./db');

const app = express();
const port = 3000;
app.use(express.json());

const con = mysql.createConnection(config.db);
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/stats', (req, res) => {
    con.query("SELECT * FROM hub_stats", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.json(result)
    });
});

app.get('/stats/:id', (req, res) => {
    con.query("SELECT * FROM hub_stats WHERE UUID == ?", req.params, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.json(result)
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
