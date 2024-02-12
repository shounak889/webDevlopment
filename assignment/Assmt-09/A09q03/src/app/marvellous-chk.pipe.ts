import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, arg1: string) : string{
    var i : number = 0;
    switch(arg1){
      case "Even":{
        if(value % 2 == 0){
          return "It is Even";
        }else{
          return "It is Not Even";
        }
      };

      case "Odd":{
        if(value % 2 != 0){
          return "It is Odd";
        }else{
          return "It is Not Odd";
        }
      };

      case "Prime":{
        if(value > 1)
        {
          for(i = 2 ; i < value/2 ; i++)
          {
            if(value % i == 0)
            {
              return "Not Prime";
            }
          }
          return "Prime";

        }
        return "Not Prime";
      };

      default : return "Not valid Option";
        
    }
  }

}
