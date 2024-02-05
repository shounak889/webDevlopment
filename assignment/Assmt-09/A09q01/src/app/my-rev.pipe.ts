import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    let tmp = value;
    let tmp2 : string = "";
    for(let i = tmp.length ; i >= 0 ; i--)
    {
      tmp2 = tmp2 + tmp.charAt(i) ;
      console.log(tmp.charAt(i));
      console.log(i);
      console.log(value);
    }

    return tmp2;
  }

}
