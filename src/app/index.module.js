import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { TitleIconsController } from './product/titleIcons/titleIcons.controller';
import { SubmitInfoController } from './product/submitInfo/submitInfo.controller';
import { ProductController } from './product/product.controller';
import { IconsLoaderService } from '../app/components/iconsLoader/iconsLoader.service';
import { FileDropDirective } from '../app/components/fileDrop/fileDrop.directive';
import { FileUploadDirective } from '../app/components/fileUpload/fileUpload.directive';
import { UtilsService } from '../app/components/common/utils.service';

angular.module('demo-app-angular', 
  ['ngAnimate', 'ngCookies', 'ngMessages', 'ngResource', 'ui.router', 'toastr','ui.bootstrap'])  
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('iconsLoader', IconsLoaderService)  
  .service('utils', UtilsService)  
  .controller('TitleIconsController', TitleIconsController)
  .controller('ProductController', ProductController)
  .controller('SubmitInfoController', SubmitInfoController)  
  .directive('fileDrop', FileDropDirective)
  .directive('fileUpload', FileUploadDirective);

  
