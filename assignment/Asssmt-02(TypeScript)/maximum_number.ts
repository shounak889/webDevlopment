/**
 * 1. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the largest number from array.

Input :
6   7   4  5   7
Output:
Addition is 29

 */

function maximum(val:number[]):number
{
    var max : number = 0;
    var iCnt : number = 0;
    
    for(iCnt=0; iCnt < val.length ; iCnt++)
    {
        if(max < val[iCnt])
        {
            max = val[iCnt];
        }
    }

    return max;
}

var arr : number[];
arr = [10,33,4,43,55,55,22];

var max : number = 0;

max = maximum(arr);

console.log(max);

