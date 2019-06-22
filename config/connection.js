// Connection 
// ==================================================

let mysql = require("mysql");

let connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Slackind1!",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.log("error connecting: "  + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;