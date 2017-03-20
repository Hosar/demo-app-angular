export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider    
    .state('product', {
      url: '/product',
      templateUrl: 'app/product/product.html',
      controller: 'ProductController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/product');
}
