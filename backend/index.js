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
var con = null;

//Todo:
//1.may need to adjust wait/interactive timeout
//2.may need to add a refresher setInterval to update the connection
//3.may need to use "forever server.js"
//https://stackoverflow.com/questions/12701259/how-to-make-a-node-js-application-run-permanently

function handleConnection() {
    console.log("Establishing a new connection to database")

    //here we are creating a function that takes in error
    const connectionErrorHandling = function (err) {
        if (err) {
            console.log('Database Error 1', err);
            //retry connection later
            setTimeout(handleConnection, 2000);
        } else {
            console.log("Database connected!");
        }
    }

    //now we pass this function into the connect as a parameter
    //and connect will use this function inside of its own method
    //inside of connection method it will 
    //call "connectionError(null)" if sucessful, or
    //call "connectionError(errInfo)" if not successful
    con = mysql.createPool(config.db, connectionErrorHandling);
    //con.connect(connectionErrorHandling);

    //you could also just put the function within the parameter
    //slot itself instead of defining it before
    //this is called an anonymous function i believe
    //see below for an example

    //set up a listener for any errors coming from MySQL
    con.on('error', function (err) {
        console.log('Database Error: 2', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        } else {
            throw err;
        }
    });
}

handleConnection();

console.log("Test Query:")
con.query("SELECT * FROM hub_stats LIMIT 1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});

//////
////// ROUTING
//////

app.get("/stats", async (req, res) => {
    try {
        con.query("SELECT * FROM hub_stats", function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    } catch (err) {
        if (err) console.error(err.message);
    }
});

//////
////// LISTEN
//////

app.listen(port, host, () => {
    console.log(`Listening at ${host}:${port}`);
});
