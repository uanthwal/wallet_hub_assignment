define(['app'], function (walletHub) {
    
    walletHub.factory('OperationsService', function () {
        var createData = function () {
            dataa = [];
            for (var i = 0; i < 50; i++) {
                dataa.push({
                    name: "Wallet" + i,
                    age: i,
                    value: "11" + i
                });
            }
            return dataa;
        };
        return {
            createArrayOfObjects: createData
        };

    });
});