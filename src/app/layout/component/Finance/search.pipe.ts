import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'vendersEmailFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.Name.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 (val.Category.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 (val.AddressLine1.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 (val.AddressLine2.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 (val.City.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||

                //  (val.ObjectTypeCode.toLocaleLowerCase().includes(args)) ||
                //  (val.Description.toLocaleLowerCase().includes(args)) ||
                //  (val.IsMasterEntity.toLocaleLowerCase().includes(args)) ||
                 (val.PrimaryContactPerson.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 (val.PrimaryContactEmail.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||

                 (val.PrimaryContactPersonPhone.toLocaleLowerCase().includes(args.toLocaleLowerCase()));

      return rVal;
    })

  }

}
