import { AbstractControl } from '@angular/forms';

export function ageValidator(min: number, max: number){

  return (control: AbstractControl): {[key: string]: boolean} | null => {

    if ( control.value !== null && (isNaN(control.value) || control.value < min  || control.value > max)){
      return {ageValidator: true};
    }
    return null;
  };
}
