import { Injectable, numberAttribute } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  checkPrime(val1 : number) : boolean
  {
      var i : number = 2;
      var flag : boolean = false;

      if(val1 <=1)
      {
        return flag;
      }

      while(i < val1/2)
      {
        if(val1 % i == 0)
        return flag;
        i++;
      }

      flag = true;
      return flag;

  }
}
