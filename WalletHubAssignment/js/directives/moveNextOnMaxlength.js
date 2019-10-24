define(['app'], function (appName) {
    appName.directive("moveNextOnMaxlength", function () {
        return {
            restrict: "A",
            link: function ($scope, element) {
                element.on("input", function (e) {
                    
                    if (element.val().length == element.attr("maxlength")) {
                        var $nextElement = element.next();
                        
                        if ($nextElement.length) {
                            $nextElement[0].focus();
                        }
                    }
                    if (element.val().length == 0) {
                        
                        var indexOfCurrent = 0;
                        var $parentElement = element.parent();
                        for (var i = 0; i < $parentElement[0].length ; i++) {
                            if (element[0].id == $parentElement[0][i].id) {
                                indexOfCurrent = i;
                                break;
                            }
                        }
                        
                        if (indexOfCurrent > 0) {
                            var $pElement = $parentElement[0][indexOfCurrent - 1];
                            $pElement.focus();
                        }
                    }
                });
            }
        }
    });
});