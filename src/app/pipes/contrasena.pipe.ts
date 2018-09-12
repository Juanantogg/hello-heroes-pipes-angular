import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, mostrar: Boolean): any {

    if (!mostrar) {
      let newValue: String = '';
      for (let index = 0; index < value.length; index++) {
        newValue += '*';
      }
      return newValue;
    }

    return value;
  }

}
