
// Dependencies
// ===================================================================
const express = require("express");
const hbs = require("express-handlebars");

// Express
// ===============================================
const app = express();
const PORT = process.env.PORT || 3001;

// Require Models/routes for syncing
// ====================================================
const db = require("./models");
// const routes = require("./controllers/burgers_controller");
require("./controllers/burgers_controller")(app);


// Set up the Express app to handle data parsing
// ==========================================================
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(routes);
app.use(express.static("public"));


// Handlebars
//===============================================================
app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

db.sequelize.sync({force: false}).then(function(){
    app.listen(PORT, function(){
    console.log("Server listening on PORT: " + PORT);
});
});