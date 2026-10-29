import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockLabel',
})
export class StockLabelPipe implements PipeTransform {
  transform(stock: number): string {
    if (stock === 0) {
      return 'Rupture';
    }
    if (stock <= 3) {
      return `Plus que ${stock}`;
    }
    return 'En stock';
  }
}
