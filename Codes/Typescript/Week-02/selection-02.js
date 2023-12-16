function checkEven(no) {
    if ((no % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
var value = 11;
var result;
result = checkEven(value);
if (result == true) {
    console.log("It is even");
}
else {
    console.log("It is odd");
}
