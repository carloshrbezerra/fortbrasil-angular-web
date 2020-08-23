import { DateUtil } from './../util/date-util';
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[between-data]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => BetWeenDataDirective), multi: true }]
})
export class BetWeenDataDirective {

  @Input('between-data') datas: string[] = [];
  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
      if(this.datas.length > 0 && this.datas.length <= 2){
        let data = DateUtil.converter(control.value);
        let dataInicial = DateUtil.converter(this.datas[0]);
        if(dataInicial){
            dataInicial.setHours(23,59,59);
        }
        if(this.datas.length < 2){
            return dataInicial > data ? {'betweenData' : true} : null;
        }
        let dataFinal = DateUtil.converter(this.datas[1]);
        if(dataFinal){
            dataFinal.setHours(23,59,59);
        }
        return dataInicial > data || dataFinal < data  ? {'betweenData' : true} : null;
      }else{
          return null;
      }
  }

}