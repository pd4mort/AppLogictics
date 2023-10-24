import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(/(\.0+|(?:(\.\d+?)0+))$/, '$2');
  }
}
