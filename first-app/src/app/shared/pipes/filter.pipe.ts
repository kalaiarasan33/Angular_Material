import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cstfilter',
  pure: false
})
export class CstFilterPipe implements PipeTransform {
  transform(items: any[], filter: string, caseVal : string): any {
      if (!items || !filter) {
          return items;
      }
      if(caseVal === 'UC'){
        return items.filter(item => item.indexOf(filter.toUpperCase()) !== -1);
      }else{
        return items.filter(item => item.indexOf(filter.toLowerCase()) !== -1);
      }
      
  }
}
