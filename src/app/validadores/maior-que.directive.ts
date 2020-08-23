import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[maior-que]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => MaiorQueDirective), multi: true }]
})
export class MaiorQueDirective {

  @Input('maior-que') maiorQue: number;
  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.maiorQue && control.value > this.maiorQue ? { 'maiorQue': true } : null;
  }

}
