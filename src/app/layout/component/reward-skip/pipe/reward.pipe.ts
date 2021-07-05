import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reward'
})
export class RewardPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = 
                
                 (val.Name.toLocaleLowerCase().includes(args.toLocaleLowerCase()));

      return rVal;
    })

  }

}
