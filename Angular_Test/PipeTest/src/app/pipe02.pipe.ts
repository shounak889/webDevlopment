import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe02'
})

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/

export class Pipe02Pipe implements PipeTransform {
  // here exp is default value and it is assigned to 1
  transform(value: number , exp = 1): unknown {
   // console.log(value);
    console.log(exp);
    return Math.pow(value, exp);
  }

}
