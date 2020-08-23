import { Directive, forwardRef, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[campos-iguais]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => CamposIguaisDirective), multi: true }]
})
export class CamposIguaisDirective {

  @Input('campos-iguais') campoIgual: string;

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.campoIgual && this.campoIgual != control.value ? { 'campoDiferente': true } : null;
  }

}
