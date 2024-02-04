import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe01'
})
export class Pipe01Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    if(args[0] == "s1")
    {
      return "S1 is present";
    }
    if(args[1] == "s1")
    {
      return "s21 is present"
    }
    else
      {
        return "Nobody is present";
      }
  }

}
