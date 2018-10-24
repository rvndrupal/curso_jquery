$("#links a").each(function() {
    //console.log(this.hostname); sver si apuntan a externo

    //link que son externos
    if (this.hostname != location.hostname) {
        $(this).append('<img src="assets/img/external.png"/>')
            .attr('target', '_blank')
    }

})