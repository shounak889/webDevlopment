function demo() {
    var langues = ["C", "Java", "C++", "JavaScript", "Go"];
    return langues;
}
var arr;
arr = demo();
console.log("Elemets of array are  : ");
var i = 0;
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
