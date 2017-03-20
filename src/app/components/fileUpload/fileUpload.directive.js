export function FileUploadDirective() {
    'ngInject';

    const link = function (scope, element, attrs, ngModel) {
        element.bind('change', function (event) {
            const files = event.target.files;
            const file = files[0];
            const objectURL = URL.createObjectURL(file);
            ngModel.$setViewValue(objectURL);
            scope.$apply();
        });
    }

    return {
        require: "ngModel",
        restrict: 'A',
        link: link
    };   
}


