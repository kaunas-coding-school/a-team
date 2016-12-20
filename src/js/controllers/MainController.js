app.controller("MainController", function () {
    /* jshint validthis: true */
    var vm = this;

    vm.title = 'Pagrindinis';
    vm.meniuMasyvas = [
        {'url': '/', 'title': 'Pradzia'},
        {'url': '/Agne', 'title': 'Agne'},
        {'url': '/Arnas', 'title': 'Arnas'},
        {'url': '/ArnasJ', 'title': 'ArnasJ'},
        {'url': '/DeividasP2', 'title': 'DeividasP2'},
        {'url': '/Justas', 'title': 'Justas'},
        {'url': '/Lukas', 'title': 'Lukas'},
        {'url': '/Zygimantas', 'title': 'Zygimantas'}
    ];
});