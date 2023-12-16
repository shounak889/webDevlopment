//function defination
function addition(arr) {
    //console.log("Elemets of array are :")
    var i = 0;
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
        //sum = sum + arr[i];
    }
    return sum;
}
var marks = [67, 89, 77, 90, 95];
var result = 0;
result = addition(marks);
console.log("Additoon is " + result);
