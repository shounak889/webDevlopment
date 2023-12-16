/**
 * 4. Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.

Input : 11
Output:
It is prime number
 */
function chkPrime(val) {
    var iCnt = 2;
    var flag = false;
    while ((val / 2) > iCnt) {
        if (val % iCnt == 0) {
            return flag;
        }
        iCnt++;
    }
    flag = true;
    return flag;
}
var a = 11;
if (chkPrime(a)) {
    console.log("It is a prime number");
}
else {
    console.log("Not ");
}


/**
 * It is a prime number
 */