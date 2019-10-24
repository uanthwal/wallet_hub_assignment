define(['app', 'services/OperationsService', 'directives/currencyOnly', 'directives/moveNextOnMaxlength', 'directives/numbersOnly'], function (walletHub) {
    
    walletHub.controller('operationsController', ['$scope', 'OperationsService', function ($scope, OperationsService) {
        $scope.pageClass = 'page-3';
        $scope.data = OperationsService.createArrayOfObjects();
        //
        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchInput = '';     // set the default search/filter term

        $scope.sumChanged = function (list) {
            a = parseFloat($scope.first || 0);
            b = parseFloat($scope.second || 0);
            c = parseFloat($scope.third || 0);

            $scope.first = (a * $scope.total) / (a + b + c);
            $scope.second = (b * $scope.total) / (a + b + c);
            $scope.third = (c * $scope.total) / (a + b + c);

        }

        $scope.addValue = function () {
            var a = 0;
            var b = 0;
            var c = 0;

            a = parseFloat($scope.first || 0);
            b = parseFloat($scope.second || 0);
            c = parseFloat($scope.third || 0);
            $scope.total = a + b + c;
        };
    }]);
});