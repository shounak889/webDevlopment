/**
 * 2. Write a typescript program which contains one function named as Area. That function should calculate area of circle. 
 *  Accept value of radius from user and return its area. Default value of PI
should be 3.14 if it is not provided by the caller.

Input:5
Output:
Area of circle is 78.5
 */

function area(radius : number) : number
{
    var ans : number ;
    var PI : number = 3.14;

    ans = PI * radius * radius;

    return ans;
}

var radius : number = 5;

console.log("Input "+radius);
console.log("Area of circle is "+area(radius));

/**
 * Input 5
Area of circle is 78.5
 */