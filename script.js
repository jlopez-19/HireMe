$(".fav-mve").hide();

$(".fav-msc").hide();

$(".fav-gme").hide();

$(".fav-hbs").hide();

$(".new-img").hide();

$("img").mouseenter(function() {
    $("img").css("width", "300px",
    "height","auto");
});

$(".mve-button").click(function() {
    $(".fav-mve").slideToggle();
});

$(".msc-button").click(function() {
    $(".fav-msc").slideToggle();
});

$(".gme-button").click(function() {
    $(".fav-gme").slideToggle();
});

$(".hbs-button").click(function() {
    $(".fav-hbs").slideToggle();
});

$("img").dblclick(function() {
    $(".new-img").fadeToggle();
});

$("h3").hover(function() {
    $("h3").css("color","#ff5050");
    $("h3").css("font-size","250%");
    $("h3").css("font-family", "Fascinate", "cursive");
});