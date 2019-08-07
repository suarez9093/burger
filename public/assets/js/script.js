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

$("#eatBurger").on("click", function(){
   let id = $(this).parents("tr").data("id");


   $.ajax({
       method: "DELETE",
       url: `/api/burgers/${id}`
   }).then(function(response){
       location.reload();
   })
})