const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const db = require("./models")

app.use(express.urlencoded({extended: true}));
app.use(express.json())

// Handlebars
const hbs = require("express-handlebars");

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// import routes
const routes = require("./controllers/burgers_controller");

app.use(routes);

db.sequelize.sync({force: false}).then(function(){app.listen(PORT, function(){
    console.log("Server listening on PORT: " + PORT);
})
})