angular.module("mainConstants",[])
.constant('config',{
    wsLocal:'http://localhost:4800/',
    getIconsUrl: this.wsLocal + 'getIcons/'
});