import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

// custom validator is a function (method) that returns callback. Callback has control as input parameter. You can make any checks of this control and should return null or an object with error
// In this case I made validator using class, and it's static method. But you can make using function keyword like shown below as comment
export class LettersOnlyValidator {
  static createValidator(): ValidatorFn {

    const regexp = /^[a-zA-Z]+$/;
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      return regexp.test(control.value) ? null : {notLettersOnly: true}
    };
  }
}

/*
export function LettersOnlyValidator {

  const regexp = /^[a-zA-Z]+$/;
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    return regexp.test(control.value) ? null : {notLettersOnly: true}
  };
}*/
