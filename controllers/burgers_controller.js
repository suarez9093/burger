let express = require("express");
let router = express.Router();
// import the burger.js file
let db = require("../models");
// create the router for the app. Export the router at the end of the file.

module.exports = function(app){

app.get("/", function(req, res){
   db.Burger.findAll({})
   .then(function(dbBurger){
       res.render("index", dbBurger)
   })
})

}