/**
 * Created by LenovoUser on 12/20/2016.
 */
app.controller('TautvydasDulskisController', function () {
    /* jshint validthis: true */
    var vm = this;
    vm.txt.testas = 'Vardas';
    vm.txt.vardas = 'Jonas';
    vm.par1 = true;

    vm.masyvas = ['vienas', 'du', 'trys', 'keturi', '...'];

    vm.meniuMasyvas = [
        {'url': 'index.html', 'title': 'Pradzia'},
        {'url': 'AgneAmbrasaite.html', 'title': 'Agne'},
        {'url': 'Arnas.html', 'title': 'Arnas'},
        {'url': 'ArnasJ.html', 'title': 'ArnasJ'},
        {'url': 'DeividasPetkevicius.html', 'title': 'DeividasP2'},
        {'url': 'justas.html', 'title': 'Justas'},
        {'url': 'LukasGudonis.html', 'title': 'Lukas'},
        {'url': 'testas.html', 'title': 'testas'},
        {'url': 'zygis.html', 'title': 'Zygimantas'}
    ];
});