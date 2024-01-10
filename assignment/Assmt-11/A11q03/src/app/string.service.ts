import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  capitalChars(val1 : string) : number
  {
    var cap : number = 0;
    var i : number = 0;
    while( i < val1.length)
    {
      if(val1[i] >= "A" && val1[i] <= "Z")
      {
        cap++;
      }

      i++;
    }

    return cap;
  }
}
