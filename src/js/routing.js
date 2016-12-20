app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "tautvydas.html"
        })
        .when("/Justas", {
            templateUrl: "justas.html"
        })
        .when("/Deividas", {
            templateUrl: "DeividasPetkevicius.html"
        })
        .when("/Agne", {
            templateUrl: "AgneAmbrasaite.html"
        });
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});