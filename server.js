
// Dependencies
// ===================================================================
const express = require("express");
const exphbs = require("express-handlebars");

// Express
// ===============================================
const app = express();
const PORT = process.env.PORT || 3001;

// Require Models/routes for syncing
// ====================================================
const db = require("./models");
// added something

// Set up the Express app to handle data parsing
// ==========================================================
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static Directory
// =========================================================
app.use(express.static("public"));


// Handlebars
//===============================================================
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Routes
// ===============================================================
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
    console.log("Server listening on PORT: " + PORT);
});
});