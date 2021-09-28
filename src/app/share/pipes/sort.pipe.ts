import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, field: string, ascending: boolean = true): Array<any> {
    if (field) {
      return value.sort((a, b) => {
        if (a[field] > b[field]) {
          return ascending ? 1 : -1;
        } else {
          return ascending ? -1 : 1;
        }
      });
    } else {
      return value;
    }
  }

}
