import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { correctFormatValidator } from './correct-format.function';

@Directive({
  selector: '[appCorrectFormat]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CorrectFormatValidator,
      multi: true
    }
  ]
})
export class CorrectFormatValidator implements Validator {

  @Input('appCorrectFormat') format!: RegExp;

  validate(control: AbstractControl): ValidationErrors | null {
    return this.format ? correctFormatValidator(this.format)(control) : null;
  }

}
