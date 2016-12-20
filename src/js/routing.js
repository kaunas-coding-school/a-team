/**
 * Created by LenovoUser on 12/20/2016.
 */
app.config(function ($routeProvider) {
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
        .when("/test", {
            templateUrl: "test.html"
        });
});