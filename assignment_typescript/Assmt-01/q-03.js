/**
 * 3. Write a typescript program which contains one function named as DisplayFactors. That function
should accept one number and display factors of that number.

Input : 20
Output: 1  2  4  5  10
 */
function displayFactorial(val) {
    var iCnt = 1;
    while (iCnt <= (val / 2)) {
        if (val % iCnt == 0) {
            //console.log(iCnt);
            // I deliberately usesd this cause console.log was printing each output on new line 
            process.stdout.write("" + iCnt);
            process.stdout.write("  ");
        }
        iCnt++;
    }
}
var num1 = 20;
console.log("Input " + num1);
console.log("Output  = ");
displayFactorial(num1);
//displayFactorial(num1)


/**
 * Input 20
Output  = 
1  2  4  5  10
 */