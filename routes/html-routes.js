let db = require("../models");



module.exports = function(app){

   app.get("/burger/new", function(req,res){
      res.render("addBurger");
   });

app.get("/", function(req, res){
   db.Burgers.findAll({}).then(function(burger){
       console.log("Burgers from the database",burger);
       res.render("index" , 
       {
           burger: burger
        })
   });
});

};