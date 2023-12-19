/**2. Write a typescript program which contains one function named as Summation. That function
accepts array of numbers and returns the summation of each number from array.

Input:
23   89  6  29  56  45  77  32
Output:
352 */

function summation(arr:number[]):number
{
    var sum:number = 0;
    var i : number = 0;
    for(i = 0 ; i < arr.length ; i++)
    {
        sum +=arr[i];
    }

    return sum;
}

var sumNum : number = 0;
var arr1:number[];

arr1 = [23,89,6,29,56,45,77,32];
sumNum = summation(arr1);

console.log(sumNum);



