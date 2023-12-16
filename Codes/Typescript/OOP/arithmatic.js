var arithmatic = /** @class */ (function () {
    function arithmatic(a, b) {
        this.no1 = a;
        this.no2 = b;
    }
    arithmatic.prototype.addition = function () {
        var ans;
        ans = this.no1 + this.no2;
        return ans;
    };
    arithmatic.prototype.subtraction = function () {
        var ans;
        ans = this.no1 - this.no2;
        return ans;
    };
    return arithmatic;
}());
var obj1 = new arithmatic(11, 10);
var obj2 = new arithmatic(25, 11);
console.log(obj1.no1);
console.log(obj1.no2);
var result = 0;
result = obj1.addition();
console.log(result);
result = obj2.subtraction();
console.log(result);
