class arithmatic
{
    public no1 : number;
    public no2 : number;

    constructor(a : number , b : number)
    {
        this.no1 = a;
        this.no2 = b;
    }

    addition() : number
    {
        var ans : number;
        ans = this.no1 + this.no2;

        return ans;
    }

    subtraction() : number
    {
        var ans : number;
        ans = this.no1 - this.no2;

        return ans;
    }
}

var obj1 = new arithmatic(11,10);
var obj2 = new arithmatic(25,11);

console.log(obj1.no1);
console.log(obj1.no2);

var result : number = 0;

result = obj1.addition();
console.log(result);

result = obj2.subtraction();
console.log(result);

/**
 * 11
10
21
14
 */