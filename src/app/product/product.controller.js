export class ProductController {
  constructor($log, iconsLoader, $uibModal, $scope, utils) {
    'ngInject';

    this.$log = $log;
    this.icons = [];
    this.$uibModal = $uibModal;
    iconsLoader.getIcons().then(icons => {      
      this.icons = icons;
    });
    this.showColorSelector = false;
    this.imgPathTitleIcon = 'assets/images/No_Image_Available.png';
    this.initialTexts = ['Title', 'Description', 'Price $'];
    this.paletteColors = ['paletteColor1','paletteColor2','paletteColor3','paletteColor4','paletteColor5'];

    this.productInfo = {
      title: '',
      description: '',
      price: '',
      imgFile: 'assets/images/No_Image_Available.png'
    };

    this.errors = {
      isValid: false,
      descriptions: []
    };

    this.utils = utils;
    this.errorColor = 'errorColor';    
    this.$scope = $scope;
    this.$scope.$watch(() => this.productInfo.imgFile, () => {
      this.$log.info('Maybe perform something with the image');
    });
  }

  openSelectIcon() {
    const modalInstance = this.$uibModal.open({
      templateUrl: 'app/product/titleIcons/titleIcons.template.html',
      controller: 'TitleIconsController',
      controllerAs: 'vm',
      backdrop: 'static',
      size: 'lg',
      resolve: {
        iconsList: () => {
          return this.icons;
        }
      }
    });

    modalInstance.result.then(result => {
      this.$log.info(result);      
      this.imgPathTitleIcon = result.selectedIcon;
    });
  }

  onlyNumbers(_event) {
    const justNumbers = this.utils.onlyNumbers(_event.charCode);
    if (!justNumbers)
      _event.preventDefault();
  }

  showColorSelectorBar() {
    this.showColorSelector = !this.showColorSelector;
  }

  publishProduct() {    
    this.productForm.$setSubmitted();   

    if(this.productForm.$invalid)
      return;

    const modalInstance = this.$uibModal.open({
      templateUrl: 'app/product/submitInfo/submitInfo.template.html',
      controller: 'SubmitInfoController',
      controllerAs: 'vm',
      backdrop: 'static',
      size: 'md'      
    });

    modalInstance.result.then(result => {
      this.$log.info(result);      
    });    
  }
}
