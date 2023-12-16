// It takes default value 

function percentage(marks : number , outOf: number = 100) :number
{

    var result : number = 0;
    result = ((marks/outOf)*100);

    return result;
}

var ans : number = 0;

ans = percentage(89,200);
console.log("percentage is "+ans+"%");


ans = percentage(89);
console.log("percentage is "+ans+"%");