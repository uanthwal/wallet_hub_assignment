define(['app', 'services/shareDataService'], function (walletHub) {
    
    walletHub.controller('inputController', ['$scope', 'shareDataService', function ($scope, shareDataService) {
        $scope.pageClass = 'page-1';
       
        $scope.submitFormData = function (user) {
            var obj = {
                name: $scope.user.name,
                age: $scope.user.age,
                mobile: $scope.user.mobile
            };
            
            shareDataService.addData(obj);
            alert("Data stored successfully !! Click on Display Info button");
            $scope.user = {};
        };
    }]);
});