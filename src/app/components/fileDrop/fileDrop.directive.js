export function FileDropDirective($log,$parse) {
    'ngInject';

    const link = function (scope, element, attrs) {

        element.addClass('drop-box');
        const preventDefault = function (evn) {
            evn.preventDefault();
            evn.stopPropagation();
        }
        
        element[0].addEventListener('dragover', function (evn) {            
            preventDefault(evn);
            element.addClass('drag-over');
        }, false);
        element[0].addEventListener('dragenter', function (evn) {
            preventDefault(evn);
        }, false);
        element[0].addEventListener('dragleave', function (evn) {
            preventDefault(evn);
            element.removeClass('drag-over');
        }, false);
        element[0].addEventListener('drop', function (evn) {
            preventDefault(evn);
            const dt = evn.dataTransfer;
            const files = dt.files;
            const file = files[0];

            const objectURL = URL.createObjectURL(file);            
            $parse(attrs.ngModel).assign(scope, objectURL);
            scope.$digest();

            element.removeClass('drag-over');
            element.addClass('dropped');
        }, false);

        scope.$on('imgUploadedDone', function () {
            element.removeClass('dropped');
        });
    }

    return {
        link: link
    };
}


