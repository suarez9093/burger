let db = require("../models");


module.exports = function(app){

app.get("/", function(req, res){
   db.Burgers.findAll({})
   .then(function(dbBurger){
       res.render("index", dbBurger)
   });
});

};