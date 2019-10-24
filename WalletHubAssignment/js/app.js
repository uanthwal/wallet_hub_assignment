define(['config', 'angular', 'angular-animate', 'angular-route'], function (config, angular) {
    var walletHub = angular.module(config.name, ['ngRoute', 'ngAnimate']);
    
    walletHub.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../pages/page-1.html',
                controller: 'inputController'
            })
            .when('/displayInfo', {
                templateUrl: '../pages/page-2.html',
                controller: 'displayController'
            })
            .when('/othertasks', {
                templateUrl: '../pages/page-3.html',
                controller: 'operationsController'
            });
    });
    walletObj = walletHub;
    return walletObj;
});