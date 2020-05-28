import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addAttendanceSearch'
})
export class AddAttendanceSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.Name.toLocaleLowerCase().includes(args.toLocaleLowerCase()));
      return rVal;
    })

  }

}
