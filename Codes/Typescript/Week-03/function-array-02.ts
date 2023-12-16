
//function defination
function addition(arr : number[]) : number
{
    //console.log("Elemets of array are :")
    var i : number = 0;
    var sum : number = 0;
    for(i = 0 ; i < arr.length ; i++)
    {
        sum += arr[i];
        //sum = sum + arr[i];
    }

    return sum;
}


var marks : number[] = [67,89,77,90,95];

var result : number = 0;
result = addition(marks);

console.log("Additoon is "+result);
