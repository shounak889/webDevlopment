function addition(no1, no2) {
    var ans = 0;
    ans = no1 + no2;
    return ans;
}
var result = 0;
result = addition(10, 11);
console.log("Addition is : " + result);
//lambda function
var fun = function (no1, no2) { return (no1 + no2); };
result = fun(10, 11);
console.log("Addition is : " + result);
// typeof fun
console.log(typeof fun);
