angular.module('angular-file-reader', [])
    .service('requestTransformers', [function () {
        this.transformToFormData = function (data, getHeaders) {
            function appendFormData(formData, key, value) {
                if (value instanceof window.File) {
                    formData.append(key, value, value.name);
                    return;
                }

                if (value instanceof window.Blob) {
                    formData.append(key, value, key + '.png');
                    return;
                }

                if (typeof value !== 'undefined') {
                    formData.append(key, value);
                    return;
                }
            }

            var formData = new window.FormData();
            angular.forEach(data, function (value, key) {
                if (value instanceof Array) {
                    for (var i = 0; i < value.length; i++) {
                        appendFormData(formData, key + '[' + i + ']', value[i]);
                    }
                } else {
                    appendFormData(formData, key, value);
                }
            });

            return formData;
        };
    }])
    .directive('fileread', [function () {
        return {
            scope: {
                fileread: '='
            },
            link: function (scope, element, attrs) {
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
    }])
;