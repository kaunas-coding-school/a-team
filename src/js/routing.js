/**
 * Created by LenovoUser on 12/20/2016.
 */
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "tautvydas.html"
        })
        .when("/red", {
            templateUrl: "red.htm"
        })
        .when("/green", {
            templateUrl: "green.htm"
        })
        .when("/blue", {
            templateUrl: "blue.htm"
        });
});