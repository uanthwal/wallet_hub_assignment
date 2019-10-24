define(['app'], function (walletHub) {
    
    walletHub.factory('shareDataService', function () {
        var userData = [];

        var addData = function (newObj) {
            userData.push(newObj);
        };

        var getData = function () {
            return userData;
        };
        return {
            addData: addData,
            getData: getData
        };

    });
});