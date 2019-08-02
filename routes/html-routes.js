let db = require("../models");



module.exports = function(app){

app.get("/", function(req, res){
   db.Burgers.findAll({}).then(function(dbBurger){
       console.log("Burgers from the database",dbBurger);
       res.render("index", dbBurger)
   });
});

};