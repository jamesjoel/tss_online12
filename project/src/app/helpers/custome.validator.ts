import { FormGroup } from '@angular/forms';

export function PasswordMatch(pass, repass){ // password
    return function(myform : FormGroup){
        let x = myform.controls[pass];
        let y = myform.controls[repass];
        if(y.errors && !y.errors.myerror){
            return;
        }

        if(x.value != y.value)
        {
            y.setErrors({ myerror : true });
        }
        else{
            y.setErrors(null);
        }
    }    

}
export function contactLength(con){
    return function(myform : FormGroup){
        let x = myform.controls[con];

        if(x.errors && ! x.errors.contacterror)
        {
            return;
        }

        if(x.value.length < 6)
        {
            x.setErrors({ contacterror : true});
        }
        else
        {
            x.setErrors(null);
        }
    }
}
export function isNumeric(con){
    return function(form : FormGroup){
        let x = form.controls[con];
        if (x.errors && !x.errors.isnumerror) {
            return;
        }
        // let y = parseInt(x.value);
        if (isNaN(x.value))
        {
            x.setErrors({ isnumerror : true});
        }else{
            
            x.setErrors(null);
        }
    }
}