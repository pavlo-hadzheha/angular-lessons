import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<any>, searchString: string, field?: string): Array<any> {
    return value.filter(elem => {
      let includedBySome = false;
      searchString.split(' ').forEach(str => {
        if (str || !searchString) {
          if (field) {
            includedBySome ||= elem[field].toLowerCase().includes(str.toLowerCase());
          } else {
            includedBySome ||= elem.toLowerCase().includes(str.toLowerCase());
          }
        }
      });
      return includedBySome;
    })
  }
}