const db = require("../models");

module.exports = function(app){

app.get("/api/burgers", function(req,res){
    db.Burgers.findAll({}).then(function(burger){
        res.json(burger)
    })
})

app.post("/api/burgers", function(req,res){

    let newBurger = {
        burger_name: req.body.burger_name
    }
    db.Burgers.create(newBurger).then(function(burger){
        console.log(`Added Burger ${burger.burger_name}`);
        res.json({id: burger.id})
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