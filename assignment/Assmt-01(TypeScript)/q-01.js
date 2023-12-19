/**
 * 1. Write a typescript program which contains one function named as Maximum.
That function accepts three parameters and it should returns largest value from the three input parameters.

Input:   23   89  6
Output:  Maximum number is 89
 */
function maximum(num1, num2, num3) {
    var max = 0;
    if (num1 > num2) {
        max = num1;
    }
    else {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
var num1 = 23;
var num2 = 89;
var num3 = 6;
console.log("Input " + num1 + "  " + num2 + "  " + num3);
console.log("maximum number is " + maximum(num1, num2, num3));


/**
 * Input 23  89  6
maximum number is 89
 */