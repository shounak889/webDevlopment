
function addition(no1: number , no2: number) : number
{
    var ans : number = 0;
    ans = no1 + no2 ;
    return ans;
}

var result : number = 0 ;

result = addition(10,11);

console.log("Addition is : "+result);

//lambda function
var fun = (no1 : number , no2 : number) => (no1 + no2);

result = fun(10,11);

console.log("Addition is : "+result);


// typeof fun
console.log(typeof fun);

/**
 * Addition is : 21
Addition is : 21
function
 */