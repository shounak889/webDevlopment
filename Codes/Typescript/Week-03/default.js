// It takes default value 
function percentage(marks, outOf) {
    if (outOf === void 0) { outOf = 100; }
    var result = 0;
    result = ((marks / outOf) * 100);
    return result;
}
var ans = 0;
ans = percentage(89, 200);
console.log("percentage is " + ans + "%");
ans = percentage(89);
console.log("percentage is " + ans + "%");
