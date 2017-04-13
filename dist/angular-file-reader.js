'use strict';

angular.module('angular-file-reader', []).directive('fileread', [function () {
    return {
        scope: {
            fileread: '='
        },
        link: function link(scope, element, attrs) {
            element.bind('change', function (changeEvent) {
                scope.$apply(function () {
                    scope.fileread = changeEvent.target.files[0];

                    console.log(changeEvent);

                    if (attrs.fileChangedHandler) {
                        angular.element(element).scope()[attrs.fileChangedHandler](scope.fileread);
                    }
                });
            });
        }
    };
}]);
//# sourceMappingURL=angular-file-reader.js.map