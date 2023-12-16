function percentage(marks : number , outOf: number) :number
{

    var result : number = 0;
    result = ((marks/outOf)*100);

    return result;
}

var ans : number = 0;

ans = percentage(119,200);

console.log("percentage is "+ans+"%");