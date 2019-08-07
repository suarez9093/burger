$("#submit").on("click", function(event){
    event.preventDefault();

    let newBurger = {
        burger_name: $("#burgerName").val().trim()
    }
    $.post("/api/burgers", newBurger).then(function(response){
        location.href= "/";
    })
    console.log("New burger added",newBurger);
})