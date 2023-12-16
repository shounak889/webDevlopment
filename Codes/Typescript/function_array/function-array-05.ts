
function demo() : string[]
{
    var langues : string[] = ["C", "Java", "C++" , "JavaScript","Go"];
    return langues;
}

var arr : string[] ;
arr = demo();

console.log("Elemets of array are  : ");

var i : number = 0;

for(i = 0 ; i< arr.length ; i++)
{
    console.log(arr[i]);
}


/**
 * Elemets of array are  : 
C
Java
C++
JavaScript
Go
 */