import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numstring'
})
export class NumstringPipe implements PipeTransform {
  

  transform(value: any, args?: any): any {
   
      if (value == 1){
        return "firstrank"
      } 
   
  }

}
