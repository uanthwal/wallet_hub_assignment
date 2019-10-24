define(['app'], function (appName) {
    appName.directive('numbersOnly', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, ngModelCtrl) {
                function fromUser(text) {
                    if (text) {
                        var transformedInput = text.replace(/[^0-9 ()-]/g, '');
                        if (transformedInput.length == 1)
                            transformedInput = '(' + transformedInput;
                        if (transformedInput.length == 4)
                            transformedInput += ')';
                        if (transformedInput.length == 5)
                            transformedInput += ' ';
                        if (transformedInput.length == 9)
                            transformedInput += '-';

                        if (transformedInput !== text) {
                            ngModelCtrl.$setViewValue(transformedInput);
                            ngModelCtrl.$render();
                        }

                        return transformedInput;
                    }
                    return undefined;
                }
                ngModelCtrl.$parsers.push(fromUser);
            }
        };
    });
});