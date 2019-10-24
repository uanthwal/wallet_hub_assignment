/*global require*/
baseURL = 'http://localhost:4112/';
var walletObj = [];
walletObj.baseURL = baseURL;
requirejs.config({
    baseUrl: "js",
    waitSeconds: 0,
    paths: {
        'angular': '../node_modules/angular/angular',
        'angular-animate': '../node_modules/angular/angular-animate',
        'angular-route': '../node_modules/angular/angular-route',
        'app': 'app'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
    },
    priority: ['angular'],
});

requirejs([
    'app',
    'angular',
    'services/OperationsService',
    'services/shareDataService',
    'controllers/inputController',
    'controllers/displayController',
    'controllers/operationsController'
],
    function (walletHub, angular, OperationsService, shareDataService, inputController, displayController, operationsController) {
        angular.bootstrap(document, [walletHub.name]);
    });