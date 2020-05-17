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
      let rVal = (val.Name.toLocaleLowerCase().includes(args)) ||
                 (val.LogicalName.toLocaleLowerCase().includes(args)) ||
                 (val.SchemaName.toLocaleLowerCase().includes(args)) ||
                //  (val.ObjectTypeCode.toLocaleLowerCase().includes(args)) ||
                 (val.Description.toLocaleLowerCase().includes(args)) ||
                //  (val.IsMasterEntity.toLocaleLowerCase().includes(args)) ||
                 (val.PrimaryAttribute.toLocaleLowerCase().includes(args)) ||
                 (val.PrimaryKey.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}