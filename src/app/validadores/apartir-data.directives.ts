import { DateUtil } from './../util/date-util';
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[apartir-data]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => ApartirDataDirective), multi: true }]
})
export class ApartirDataDirective {

  @Input('apartir-data') apartir: string;
  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    let data = DateUtil.converter(control.value);
    let dataRef = DateUtil.converter(this.apartir);
    return dataRef > data  ? {'apartirData' : true} : null;
  }

}