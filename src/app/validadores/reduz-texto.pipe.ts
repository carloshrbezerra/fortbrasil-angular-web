import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduzTexto'
})
export class ReduzTextoPipe implements PipeTransform {

  transform(value: string, tamanho: number): string {
    return value && value.length > tamanho ? value.substring(0,tamanho).concat('...') : value;
  }

}
