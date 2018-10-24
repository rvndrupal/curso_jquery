//cambiar a si
//$(".huevos").text("Si");


var $desayuno = $(".desayuno");

$desayuno.find('.huevos').text("SI").end()
    .find('.tostadas').text("SI").end() //vuelve a desayuno
    .find('.jugo').text("SI").end();

//lo busca una sola ves y los barre