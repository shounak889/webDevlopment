
//function defination
function display(arr : number[]):void
{
    console.log("Elemets of array are :")
    var i : number = 0;
    for(i = 0 ; i < arr.length ; i++)
    {
        console.log(arr[i]);
    }
}


var marks : number[] = [67,89,77,90,95];

//function call
display(marks);

/**
 * Elemets of array are :
67
89
77
90
95
 */
