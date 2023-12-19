/**
 * 3. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the second largest number from array.

Input:
23   89  6  29  56  45  77  32
Output:
Second Maximum number is 77

 */
function sec_maximum(arr) {
    var max1 = 0;
    var max2 = 0;
    var i = 0;
    for (i = 0; i < arr.length; i++) {
        if (max1 < arr[i]) {
            max1 = arr[i];
        }
        if (arr[i] < max1 && arr[i] > max2) {
            max2 = arr[i];
        }
    }
    return max2;
}
var arr;
var max2 = 0;
arr = [23, 89, 6, 29, 56, 45, 77, 32];
//arr = [59, 100, 76, 10, 99, 16, 58, 61, 95, 9];
max2 = sec_maximum(arr);
console.log(max2);


/**
 * 77
 * 
 */