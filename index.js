// document.querySelector("h1").style.color = "green";

// $("h1").css("color","red");

 $("h1").addClass("red-title");
 $("h1").text("Sasithon Koethong");

 $(document).keypress( function (e){
    $("h1").text(e.key);
 }
);
