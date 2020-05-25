import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employerSearch'
})
export class EmployerSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.LegalName.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 (val.TradeName.toLocaleLowerCase().includes(args.toLocaleLowerCase()));
      return rVal;
    })

  }

}