var elemento = $(".elem");

elemento.is('div') && console.log("Es un Div");

elemento.is('.elem') && console.log("tiene la clase elem");

//no es visible
elemento.is(':not(:visible)') && console.log("No esta visible");

// visible
elemento.is(':visible') && console.log("Esta visible");



//animacion
elemento.animate({ 'width': 1200 }, 1600);

// esta animado
elemento.is(':animated') && console.log("Esta animado");

var footer = $(".footer");

footer.animate({ 'width': 1200 }, 1800);