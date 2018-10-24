$("li", "#segunda").each(function() {
    console.log($(this).html());
})

var div = $('<div>', {
    'class': "azul-grande",
    'css': {
        'background-color': 'blue'
    },
    'width': 30,
    'height': 30,
    'animate': {
        'width': 250,
        'height': 50
    }
});

var rojo = $('<div>', {
    'class': "azul-grande",
    'css': {
        'background-color': 'red'
    },
    'width': 500,
    'height': 300,
    'animate': {
        'width': 850,
        'height': 200
    }
});

div.appendTo('body'); //se crea el div dentro del body

rojo.appendTo('#primera');