export class UtilsService {
    constructor() {
        'ngInject'

    }

    onlyNumbers(charCode) {
        //allow dot  		
        if (charCode == 46)
            return true;
        //allow comma
        if (charCode == 44)
            return true;
        //allow numbers
        if ((charCode >= 48) && (charCode <= 57))
            return true;

        return false;
    }

    onlyLettersAndNumbers(charCode) {
        //Allow backspace, del, cursor move on firefox	  		
        if (charCode == 0)
            return true;
        if (charCode == 13)
            return true;
        //allow letters
        if ((charCode >= 65) && (charCode <= 122))
            return true;
        //allow numbers
        if ((charCode >= 48) && (charCode <= 57))
            return true;

        return false;
    }
}