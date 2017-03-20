export class SubmitInfoController{
    constructor($uibModalInstance){
		'ngInject'
		this.$uibModalInstance = $uibModalInstance;
	}

	close() {
		this.$uibModalInstance.dismiss( 'cancel' );
	}	
}