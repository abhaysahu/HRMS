import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'entitysEmailFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.Name.toLocaleLowerCase().includes(args)) || (val.LogicalName.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}