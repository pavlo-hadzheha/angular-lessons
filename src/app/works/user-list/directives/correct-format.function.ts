import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const CUSTOM_REGEX_FORMATS = {
    email: /^(\w+((\.|-)\w+)?\.?)+@(gmail|ukr)\.(ua|com|org|net)$/,
    name: /^[A-Za-z]{3,18}$/,
    password: /^(\w|\s){8,255}$/
}

export function correctFormatValidator(newRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isForbidden = newRe.test(control.value);
        return isForbidden ? null : { forbiddenFormat: { value: control.value } };
    }
}