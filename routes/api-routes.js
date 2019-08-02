const db = require("../models");

module.exports = function(app){

app.get("/api/burgers", function(req,res){
    db.Burgers.findAll({}).then(function(dbBurger){
        res.json(dbBurger)
    })
})

app.post("/api/burgers", function(req,res){

    db.Burgers.create(newBurger).then(function(dbBurger){
        console.log(`Added Burger ${dbBurger.burger_name}`);
        res.json({id: dbBurger.id})
    })

})

app.delete("/api/burgers/:id", function(req,res){
    db.Burgers.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(burgers)
    {
        res.end();
    })
})



};