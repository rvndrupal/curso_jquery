//si existe el h1

/*if ($("h1").length) {
    console.log("Existe un h1");
}*/

//$("h1").length && console.log("Elemento h1 existe");

$.fn.existe = function() {
    return this.length > 0;
}

console.log($("h1").existe() ? "Existe" : "No existe");