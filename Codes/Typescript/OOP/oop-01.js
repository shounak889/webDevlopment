function addition(no1, no2) {
    var ans = 0;
    ans = no1 + no2;
    return ans;
}
function subtraction(no1, no2) {
    var ans = 0;
    ans = no1 - no2;
    return ans;
}
var val1 = 11;
var val2 = 10;
var result = 0;
result = addition(val1, val2);
console.log("Addition is " + result);
result = subtraction(val1, val2);
console.log("Subtraction is " + result);
