function percentage(marks, outOf) {
    var result = 0;
    result = ((marks / outOf) * 100);
    return result;
}
var ans = 0;
ans = percentage(70, 200);
console.log("percentage is " + ans + "%");
