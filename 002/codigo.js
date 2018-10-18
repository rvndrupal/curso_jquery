var route = {
    _routes: {},
    add: function(url, action) {
        this._routes[url] = action;
    },
    run: function() {
        $.each(this._routes, function(patron) {
            //each for
            if (location.href.match(patron)) {
                this();
            }
        });
    }

}

route.add('002/002.html', function() {
    console.log("Este codigo solo funciona en la 002.html");
})

route.run();