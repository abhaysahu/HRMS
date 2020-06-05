import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listEmployee'
})
export class ListEmployeePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {

      console.log(val)


      let rVal = (val.FullName.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 (val.PersonalEmail.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 (val.Designation.Text.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 (val.Department.Text.toLocaleLowerCase().includes(args.toLocaleLowerCase()));
                //  (val.PrimaryKey.toLocaleLowerCase().includes(args.toLocaleLowerCase()));

      return rVal;
    })

  }

}
