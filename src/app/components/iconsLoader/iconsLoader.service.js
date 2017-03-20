import Promise from 'bluebird';
export class IconsLoaderService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;    
  }

  getIcons() {
    const fakeIcons = [
      'assets/images/Cook-100.png',
      'assets/images/carVocho.png',
      'assets/images/green-tag-icon.png',
      'assets/images/home_128.png',
      'assets/images/notes.png',
      'assets/images/padlock.png',
      'assets/images/pencil.png',
      'assets/images/sheet.png',
      'assets/images/squareBox.png',
      'assets/images/television.png'      
      ];
    return Promise.resolve(fakeIcons);    

  }
}