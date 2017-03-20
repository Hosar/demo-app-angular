describe('product controller', () => {
    let vm;
    let scope;
    let iconsLoader;
    let uibModal;

    beforeEach(angular.mock.module('demo-app-angular'));

    beforeEach(inject(($controller, $log, $rootScope, _iconsLoader_, $uibModal, _utils_) => {
        scope = $rootScope.$new();
        iconsLoader = _iconsLoader_;
        uibModal = $uibModal;
        spyOn(iconsLoader, 'getIcons').and.callThrough();
        spyOn(uibModal, 'open');
        uibModal.open.and.callFake(function () {
            return {
                result: {
                    then: function (callBack) {
                        callBack({selectedIcon:'assets/images/vocho.png'});
                    }
                }
            };
        });

        vm = $controller('ProductController', {
            $log: $log,
            $scope: scope,
            iconsLoader: iconsLoader,
            $uibModal: uibModal,
            utils: _utils_
        });
    }));

    it('should initialize default product info', () => {
        const objExpected = {
            title: '',
            description: '',
            price: '',
            imgFile: 'assets/images/No_Image_Available.png'
        };
        expect(vm.productInfo).toEqual(objExpected);

    });

    it('should load the icons', () => {
        expect(iconsLoader.getIcons).toHaveBeenCalled();
    });

    it('should open a modal to allow select the main icon', () => {
        vm.openSelectIcon();
        expect(uibModal.open).toHaveBeenCalled();
    });

    it('should not allow to enter letters on price', () => {
        const fakeEvent = {
            preventDefault: () => { },
            charCode: 84
        };
        spyOn(fakeEvent,'preventDefault');
        vm.onlyNumbers(fakeEvent);        
        expect(fakeEvent.preventDefault).toHaveBeenCalled();
    });

    it('should allow numbers on price', () => {
        const fakeEvent = {
            preventDefault: () => { },
            charCode: 49
        };
        spyOn(fakeEvent,'preventDefault');
        vm.onlyNumbers(fakeEvent);        
        expect(fakeEvent.preventDefault).not.toHaveBeenCalled();
    });

    it('should not publish a product if there are validation errors', () => {
        const fakeForm = {
            $setSubmitted:() => {},
            $invalid: true
        };

        spyOn(fakeForm,'$setSubmitted');
        vm.productForm = fakeForm;
        vm.publishProduct();
        expect(fakeForm.$setSubmitted).toHaveBeenCalled();
        expect(uibModal.open).not.toHaveBeenCalled();
    });

    it('should publish a product', () => {
        const fakeForm = {
            $setSubmitted:() => {},
            $invalid: false
        };

        spyOn(fakeForm,'$setSubmitted');
        vm.productForm = fakeForm;
        vm.publishProduct();
        expect(fakeForm.$setSubmitted).toHaveBeenCalled();
        expect(uibModal.open).toHaveBeenCalled();
    });

    it('openSelectIcon', () => {
        const expectedIcon = 'assets/images/vocho.png';
        vm.openSelectIcon();       

        expect(uibModal.open).toHaveBeenCalled();
        expect(vm.imgPathTitleIcon).toEqual(expectedIcon);
    });

});