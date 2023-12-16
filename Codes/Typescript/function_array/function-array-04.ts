
function demo() : number[]
{
    var marks : number[] = [98,89,79,87,60];
    return marks;
}

var arr : number[] = 
arr = demo();

console.log("Elemets of array are  : ");

var i : number = 0;

for(i = 0 ; i< arr.length ; i++)
{
    console.log(arr[i]);
}



/**
 * Elemets of array are  : 
98
89
79
87
60
 */