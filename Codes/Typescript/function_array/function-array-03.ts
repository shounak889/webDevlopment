
function demo() : number[]
{
    return new Array(10,20,30,40,90);
}

var ret : number[] = demo();

console.log("Elemets of array are  : ");

var i : number = 0;

for(i = 0 ; i< ret.length ; i++)
{
    console.log(ret[i]);
}


/**
 * Elemets of array are  : 
10
20
30
40
90
 */
