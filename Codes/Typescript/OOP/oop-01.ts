function addition(no1 : number, no2: number) : number
{
    var ans : number = 0;
    ans = no1 + no2;
    return ans;
}

function subtraction ( no1 : number , no2: number) : number
{
    var ans : number = 0;
    ans = no1 - no2;
    return ans;
}

var val1 : number = 11;
var val2 : number = 10;
var result : number = 0;


result = addition(val1, val2);
console.log("Addition is "+result);

result = subtraction(val1, val2);
console.log("Subtraction is "+result);