define(['app', 'services/shareDataService'], function (walletHub) {
    
    walletHub.controller('displayController', ['$scope', 'shareDataService', function ($scope, shareDataService) {
        $scope.pageClass = 'page-2';
        $scope.products = shareDataService.getData();
        
    }]);
});