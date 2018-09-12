import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: String, todas: Boolean = true): String {

    if (todas) {
      const nombres = value.toLowerCase().split(' ');
      const capitalizar: String[] = nombres.map((nombre) => nombre.slice(0, 1).toUpperCase() + nombre.substr(1));
      value = capitalizar.join(' ');
    } else {
      value = value.slice(0, 1).toUpperCase() + value.substr(1).toLowerCase();
    }

    return value;
  }
}
