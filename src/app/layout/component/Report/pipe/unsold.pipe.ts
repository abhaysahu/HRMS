import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unsold'
})
export class UnsoldPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.ProductName.toLocaleLowerCase().includes(args.toLocaleLowerCase()))
                 //(val.LogicalName.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 //(val.SchemaName.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                //  (val.ObjectTypeCode.toLocaleLowerCase().includes(args)) ||
                //  (val.Description.toLocaleLowerCase().includes(args)) ||
                //  (val.IsMasterEntity.toLocaleLowerCase().includes(args)) ||
                 //(val.PrimaryAttribute.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 //(val.PrimaryKey.toLocaleLowerCase().includes(args.toLocaleLowerCase()));

      return rVal;
    })

  }

}