import { DateUtil } from './../util/date-util';
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[ate-data]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => AteDataDirective), multi: true }]
})
export class AteDataDirective {

  @Input('ate-data') ate: string;
  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    let data = DateUtil.converter(control.value);
    let dataRef = DateUtil.converter(this.ate);
    return dataRef < data  ? {'ateData' : true} : null;
  }

}