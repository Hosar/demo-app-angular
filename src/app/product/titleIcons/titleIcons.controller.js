export class TitleIconsController{
    constructor($log,iconsList,$uibModalInstance){
		'ngInject'
		this.$log = $log;		
		this.iconsList = iconsList;

		this.title = 'Logo:';
		this.$uibModalInstance = $uibModalInstance;
		this._objClicked;
		this.selectedIcon;
		
	}

	cancelTitleIcons() {
		this.$uibModalInstance.dismiss( 'cancel' );
	}

	markSelected(objClicked , _icon){
		if(this._objClicked){			
			angular.element( this._objClicked.currentTarget ).removeClass('titleIconSelected')
		}

		this._objClicked = Object.assign({},objClicked);
		this.selectedIcon = _icon;
		angular.element( this._objClicked.currentTarget ).addClass( 'titleIconSelected' );
	}

	okIconsTitle(){
		const result = {
				selectedIcon : this.selectedIcon
		};
		this.$uibModalInstance.close( result );
	}
}